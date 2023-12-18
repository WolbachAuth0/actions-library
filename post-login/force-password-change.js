/**
 * This action will force a user to reset their password if one of the following is true;
 *   1. The user has not yet reset their password, or
 *   2. they have last reset their password before a certain date.
 * 
 * Handler that will be called during the execution of a PostLogin flow.
 *
 * @param {Event} event - Details about the user and the context in which they are logging in.
 * @param {PostLoginAPI} api - Interface whose methods can be used to change the behavior of the login.
*/
const { AuthenticationClient } = require('auth0')
const moment = require('moment')
exports.onExecutePostLogin = async (event, api) => {

  // if the user did not use a password to authenticate (e.g. social auth), then return
  // OPTIONALLY ... it may be more robust ensure that a specific DB connection was used before proceeding
  const usedPassword = event.authentication.methods.map(x => x.name).includes('pwd')
  if (!usedPassword) { 
    console.log('exit function')
    return
  }

  // last_password_reset is a string timestamp, but may be empty on the user profile 
  const last_password_reset = event.user?.last_password_reset
  const pwdResetDate = last_password_reset ?  moment(last_password_reset) : null
  const cutOffDate = moment('12-12-2023') // the day after your Gigya users are imported

  if (!pwdResetDate || cutOffDate.isBefore(pwdResetDate)) {
    console.log('trigger password reset')
    // await forcePasswordReset(event, api)
  } else {
    console.log('password is up to date')
  }

};

async function forcePasswordReset(event, api) {
  // to reduce latency, don't instantiate the client unless we're gonna use it
  const auth0 = new AuthenticationClient({
    domain: `${event.secrets.YOUR_ACCOUNT}.auth0.com`,
    clientId: `${event.secrets.OPTIONAL_CLIENT_ID}`,
    clientSecret: `${event.secrets.OPTIONAL_CLIENT_SECRET}`,
  })

  const email = event.user.email
  const connection = event.connection.name
  await auth0.database.changePassword({ email, connection })

  // Now kill the user's session and redirect them to to a page that tells them to check email to reset password
  const TENANT_DOMAIN = event.secrets.TENANT_DOMAIN
  const URL = 'The url you want the user to return to after'
  api.redirect.sendUserTo(`https://${TENANT_DOMAIN}/v2/logout?returnTo=${URL}`)
};

/**
* Handler that will be invoked when this action is resuming after an external redirect. If your
* onExecutePostLogin function does not perform a redirect, this function can be safely ignored.
*
* @param {Event} event - Details about the user and the context in which they are logging in.
* @param {PostLoginAPI} api - Interface whose methods can be used to change the behavior of the login.
*/
exports.onContinuePostLogin = async (event, api) => {

};
