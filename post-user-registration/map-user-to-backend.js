/**
 * This action will post back to an independent backend API after a user has signed up
 * to Auth0 and write the user_id and email address into that backend. 
 * 
 * Handler that will be called during the execution of a PostUserRegistration flow.
 *
 * @param {Event} event - Details about the context and user that has registered.
 * @param {PostUserRegistrationAPI} api - Methods and utilities to help change the behavior after a signup.
*/
const axios = require('axios')
exports.onExecutePostUserRegistration = async (event, api) => {

  const http = axios.create({
    baseURL: event.secrets.API_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      // 'Authorization' : `Bearer ${access_token}` // TODO: secure the api.
    }
  })

  const db_id = event.user.app_metadata?.db_id

  try {
    const body = {
      email: event.user.email,
      user_id: event.user.user_id,
    }
    const response = await http.patch(`/api/users/${db_id}`, body)
    console.log(response.data?.message || 'response message not found')
  } catch (err) {
    console.error(err)
    return
  }
};
