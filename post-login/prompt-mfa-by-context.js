/**
 * This action will prompt a user for MFA based upon the preferences set in the metadata of
 *   1. the user.user_metadata
 *   2. the organization being logged into
 *   3. the application (client) metadata
 *   4. if sensitive access token scopes are being requested by a specific application
 * 
 * Handler that will be called during the execution of a PostLogin flow.
 *
 * @param {Event} event - Details about the user and the context in which they are logging in.
 * @param {PostLoginAPI} api - Interface whose methods can be used to change the behavior of the login.
*/
exports.onExecutePostLogin = async (event, api) => {
  // EXAMPLE: 
  // don't prompt MFA if user authenticated with device biometrics
  let authMethods = event.authentication?.methods || []
  let usedBiometrics = authMethods.find(method => method.name === 'webauthn-platform')
  if (usedBiometrics) return

  // EXAMPLE: 
  // TRIGGER MFA PER USER
  // If the user's user_metadata has the enable_mfa property and that property is truthy ...
  if (event.user.user_metadata?.enable_mfa) {
    api.multifactor.enable('any')
    return
  }

  // EXAMPLE:
  // TRIGGER MFA BY ORGANIZATION
  // if the organizations's metadata has the enable_mfa property and that property is truthy ...
  if (event.organization?.metadata?.enable_mfa.toLowerCase() === 'true') {
    api.multifactor.enable('any')
    return
  }

  // EXAMPLE:
  // TRIGGER MFA FOR SENSITIVE ACTIONS IN SPECIFIC APPS
  // Do this to prompt MFA for sensitive actions inside specific applications.
  if (event.client.client_id === 'U82RMQ5HbTnx5tHGUKqtgNhBrI6Grize') {
    const sensitiveScopes = [ 'create:connections', 'update:connections', 'delete:connections' ]
    const sensitiveScopesRequested = !event.transaction ? false : event.transaction.requested_scopes
      .filter(scope => sensitiveScopes.includes(scope))
      .length > 0
    if (sensitiveScopesRequested) {
      api.multifactor.enable('any')
    }
    return
  }
  
}