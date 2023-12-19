/**
 * Handler that will be called during the execution of a Password Reset / Post Challenge Flow.
 *
 * --- AUTH0 ACTIONS TEMPLATE https://github.com/auth0/os-marketplace/blob/main/templates/email-verified-PASSWORD_RESET_POST_CHALLENGE ---
 *
 * @param {Event} event - Details about the post challenge request.
 * @param {PasswordResetPostChallengeAPI} api - Interface whose methods can be used to change the behavior of the post challenge flow.
 */
exports.onExecutePostChallenge = async (event, api) => {
  if (!event.user.email_verified) {
      api.access.deny(
          'Please verify your email before changing your password.'
      );
  }
};