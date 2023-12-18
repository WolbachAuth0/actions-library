/**
 * This function adds a custom field to the new user's app_metadata which is intended to store a
 * list of M2M-Client applications which belong to the user.
 *  
 * Handler that will be called during the execution of a PreUserRegistration flow.
 *
 * @param {Event} event - Details about the context and user that is attempting to register.
 * @param {PreUserRegistrationAPI} api - Interface whose methods can be used to change the behavior of the signup.
*/
exports.onExecutePreUserRegistration = async (event, api) => {
  // signing up for the External API Registration Site
  if (event?.client?.client_id == 'VYA85jQ5XwI2btsAnNd4I9YHaCmj5aDz')  {
    api.user.setAppMetadata('m2m_clients', [])
  }
};