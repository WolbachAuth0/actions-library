const api = {
  /**
   * Control availability to the access token.
   */
  access: {
    /**
     * Mark the current login attempt as denied. This prevents the end-user from completing the login 
     * flow. This does not cancel other user-related side effects requested by this Action, such as 
     * metadata changes. The login flow immediately stops following the completion of this action and 
     * no further Actions will be executed.
     * 
     * @returns {object} a reference to the api object
     * @param {string} reason The OAuth error code justifying the rejection of the login. Should be 
     * one of: 'invalid_scope', 'invalid_request', or 'server_error'
     * @param {string} userMessage A human-readable explanation for rejecting the access token grant.
     */
    deny: jest.fn(function (reason) { return api })
  },
  /**
   * Request changes to the authentication state of the current user's session.
   */
  authentication: {
    /**
     * Challenge the user with one or more specified multifactor authentication factors. This method 
     * presents the default challenge first, then allows the user to select a different option if 
     * additional factors have been supplied. If the user has not enrolled in any of the factors supplied 
     * (including both the default and any additional factors), the command fails.
     * 
     * Note: This method overrides existing policies and rules that enable or disable MFA in a tenant.
     * 
     * @param {object} factor An object containing the type field. type is a string used to specify the 
     * default MFA factor or factors used to challenge the user.
     * @param {object} options Optional object. An object containing the optional additionalFactors 
     * field.additionalFactors is an array used to specify other factors a user can choose from when 
     * completing the MFA challenge. Supports the same values as the type field.
     */
    challengeWith: jest.fn(function (factor, options) { return }),
    /**
     * Trigger an MFA challenge and allow the user to select their preferred factor from 
     * the supplied list. This method presents a factor picker to the user rather than a 
     * specific challenge, in accordance with the following conditions:
     * 
     * If two or more factors are specified, a factor picker displays to the user.
     * If the user has only enrolled in one of the specified factors (or only one factor is specified), 
     * the factor picker is skipped. 
     * If the user has not enrolled in any of the specified factors, the challenge command fails.
     * 
     * Note: This method overrides existing policies and rules that enable or disable MFA in a tenant.
     */
    challengeWithAny: jest.fn(function (factors) { return }),
  },
  /**
   * Store and retrieve data that persists across executions.
   */
  cache: {
    /**
     * Delete a record describing a cached value at the supplied key if it exists.
     * 
     * Returns a CacheWriteResult object with type: "success" if a value was removed from the cache. 
     * A failed operation returns type: "error". 
     * 
     * For errors, the returned object will have a code property that indicates the nature of the failure.
     * 
     * @returns {object} CacheWriteResult object
     * @param {string} key The key of the record stored in the cache.
     */
    delete: jest.fn(function (key) {
      return { type: 'success'}
    }),
    /**
     * Retrieve a record describing a cached value at the supplied key, if it exists. If a record is found, 
     * the cached value can be found at the value property of the returned object. 
     * 
     * Returns a cache record if an item is found in the cache for the supplied key. Cache records are objects 
     * with a value property holding the cached value as well as an expires_at property indicating the maximum 
     * expiry of the record in milliseconds since the Unix epoch.
     * 
     * Important: This cache is designed for short-lived, ephemeral data. Items may not be available in later 
     * transactions even if they are within their supplied their lifetime.
     * 
     * @param {string} key The key of the record stored in the cache.
     */
    get: jest.fn(function (key) {
      return { key: value }
    }),
    /**
     * Store or update a string value in the cache at the specified key.
     * 
     * Values stored in this cache are scoped to the Trigger in which they are set. They are subject to the 
     * Actions Cache Limits.
     * 
     * Values stored in this way will have lifetimes of up to the specified ttl or expires_at values. If no
     * lifetime is specified, a default of lifetime of 15 minutes will be used. Lifetimes may not exceed the 
     * maximum duration listed at Actions Cache Limits.
     * 
     * @param {string} key The key of the record stored in the cache.
     * @param {string} value The value of the record to be stored.
     * @param {object} options Options for adjusting cache behavior.
     * @param {number} options.expires_at Optional Number. The absolute expiry time in milliseconds since the 
     * unix epoch. While cached records may be evicted earlier, they will never remain beyond the the supplied 
     * expires_at. 
     * 
     * Note: This value should not be supplied if a value was also provided for ttl. If both options are supplied, 
     * the earlier expiry of the two will be used.
     * @param {number} options.ttl Optional number. The time-to-live value of this cache entry in milliseconds. 
     * While cached values may be evicted earlier, they will never remain beyond the the supplied ttl. 
     * 
     * Note: This value should not be supplied if a value was also provided for expires_at. If both options are 
     * supplied, the earlier expiry of the two will be used.
     */
    set: jest.fn(function (key, value, options) {
      return
    })
  },
  /**
   * 
   */
  redirect: {
    /**
     * Create a session token that is suitable for use as a query string parameter redirect target (via 
     * sendUserTo) and contains data whose authenticity must be provable by the target endpoint. The 
     * target endpoint can verify the authenticity and integrity of the data by checking the JWT's 
     * signature using a shared secret.
     * 
     * Returns a JWT string.
     * 
     * @returns A JWT string
     * @param {object} options Configure how sensitive data is encoded into the query parameters of the 
     * resulting url.
     * @param {number} options.expiresInSeconds Number of seconds before the token expires. Default is 900.
     * @param {object} options.payload The data intended to be passed to the target of the redirect and whose 
     * authenticity and integrity must be provable.
     * @param {string} options.secret A secret that will be used to sign a JWT shared with the redirect target. 
     * This value should be stored as a secret and retrieved using event.secrets['SECRET_NAME'].
     */
    encodeToken: jest.fn(function (options) { return '' }),
    /**
     * Trigger a browser redirect to the target `url` immediately after the action completes.
     * 
     * Returns a reference to the api object.
     * 
     * @returns A reference to the api object
     * @param {string} url The target URL of the redirect.
     * @param {object} options An object representing any additional query string parameters appended to the 
     * redirect URL.
     * @param {object} options.query Additional query string parameters to append to the redirect URL.
     */
    sendUserTo: jest.fn(function (url, options) { return api }),
    /**
     * Retrieve the data encoded in a JWT token passed to the /continue endpoint while simultaneously verifying 
     * the authenticity and integrity of that data.
     * 
     * Returns payload of the JWT token.
     * 
     * @returns
     * @param {object} options Options for retrieving the data encoded in a JWT token passed to the /continue endpoint 
     * following a redirect.
     * @param {string} options.secret Secret used to encode the token.
     * @param {string} options.tokenParameterName The name of the query or body parameter that was sent to the continue
     * endpoint. Defaults to session_token.
     */
    validateToken: jest.fn(function (options) { return '' }),
  }
}

module.exports = api