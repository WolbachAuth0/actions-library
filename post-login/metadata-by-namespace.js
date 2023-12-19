/**
 * This function will append user.app_metadata and user.user_metadata to an ID Token but ONLY the metadata
 * which is relavant to the specific application. Inside the user's metadata, the relavant data for specific
 * applications will be stored in namespaced blocks. For example ...
 * 
 * "user_metadata": {
 *     "https://my-first-app.com": {
 *        "what-is-your-favorite-color": "blue"
 *     },
 *     "https://my-second-app.com": {
 *        "what-is-your-quest": "I seek the grail"
 *     }
 * }
 * 
 * Then the client applications will store their own metadata which holds the namespace key that the client
 * application should use. For example ...
 * 
 * client.metadata (my-first-app)
 * {
 *     "md_namespace": "https://my-first-app.com"
 * }
 * 
 * client.metadata (my-second-app)
 * {
 *     "md_namespace": "https://my-first-app.com"
 * }
 * 
 * Then, when a user logs into any application, the action will populate the ID and access tokens with the data
 * which is appropriate for the specific application.
 * 
 * Handler that will be called during the execution of a PostLogin flow.
 *
 * @param {Event} event - Details about the user and the context in which they are logging in.
 * @param {PostLoginAPI} api - Interface whose methods can be used to change the behavior of the login.
*/
exports.onExecutePostLogin = async (event, api) => {

  // get the namespace to use from the clien application's metadata
  const namespace = event?.client.metadata?.md_namespace

  // if the namespace exists ...
  if (namespace) {
    // fetch the namespaced data from the user profile 
    const app_metadata = event.user.app_metadata[namespace]
    const user_metadata = event.user.user_metadata[namespace]
    
    // add the data to the token
    api.idToken.setCustomClaim('app-metadata', app_metadata)
    api.idToken.setCustomClaim('user-metadata', user_metadata)

    // add the namespace as a custom claim too so that the client app knows which 
    // namespace to update if it does that.
    api.idToken.setCustomClaim('namespace', namespace)
    api.accessToken.setCustomClaim('namespace', namespace)
  }

};