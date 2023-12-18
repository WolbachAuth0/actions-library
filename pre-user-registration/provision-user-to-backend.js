/**
 * This action will execute before auth0 saves the user to a db connection. It will callback to an
 * externally hosted API and check to see if a user with that email address exists. The backend should 
 * ensure that a user with that email address exists and respond to the call with a "db_id" property. The
 * action then appends that db_id into the user's app_metadata for later use. 
 * 
 * Handler that will be called during the execution of a PreUserRegistration flow.
 *
 * @param {Event} event - Details about the context and user that is attempting to register.
 * @param {PreUserRegistrationAPI} api - Interface whose methods can be used to change the behavior of the signup.
*/
const axios = require('axios')
exports.onExecutePreUserRegistration = async (event, api) => {

  const request = {
    method: 'POST',
    url: `${event.secrets.API_BASE_URL}/api/users`,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    data: {
      email: event.user.email,
    }
  }

  try {
    const response = await axios(request)
    const db_id = response.data?.data?.db_id || null
    api.user.setAppMetadata('db_id', db_id)
  } catch (err) {
    console.error(err)
    return
  }
  
};
