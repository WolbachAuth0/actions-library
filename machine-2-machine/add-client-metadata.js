/**
 * This Action grabs the metadata from the client application and appends it directly into the
 * access token.
 * 
 * Handler that will be called during the execution of a Client Credentials exchange.
 *
 * @param {Event} event - Details about client credentials grant request.
 * @param {CredentialsExchangeAPI} api - Interface whose methods can be used to change the behavior 
 * of client credentials grant.
*/
exports.onExecuteCredentialsExchange = async (event, api) => {
  const metadata = event.client.metadata
  api.accessToken.setCustomClaim('user-info', metadata)
};
