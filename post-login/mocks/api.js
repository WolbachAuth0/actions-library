const api = {
  /**
   * Control availability to the access token.
   */
  access: {
    /**
     * Deny the user from being able to register. The signup flow will immediately stop following 
     * the completion of this action and no further Actions will be executed.
     * 
     * @returns {object} a reference to the api object
     * @param {string} reason The OAuth error code justifying the rejection of the login. Should be 
     * one of: 'invalid_scope', 'invalid_request', or 'server_error'
     * @param {string} userMessage A human-readable explanation for rejecting the access token grant.
     */
    deny: jest.fn(function (reason, userMessage) { return api })
  },
  /**
   * Request changes to the access token being issued.
   */
  accessToken: {
    /**
     * Set a custom claim on the Access Token that will be issued upon completion of the login flow.
     * 
     * Returns a reference to the api object.
     * 
     * @returns {object} a reference to the api object
     * @param {string} name Name of the claim (note that this may need to be a fully-qualified url).
     * @param {any} value Any value. The value of the claim.
     */
    setCustomClaim: jest.fn(function (name, value) { return api }),
    /**
     * Add a scope on the Access Token that will be issued upon completion of the login flow.
     * 
     * Returns a reference to the api object.
     * 
     * @returns {object} a reference to the api object
     * @param {string} scope The scope to be removed.
     */
    addScope: jest.fn(function (scope) { return api }),
    /**
     * Remove a scope on the Access Token that will be issued upon completion of the login flow.
     * 
     * Returns a reference to the api object.
     * 
     * @returns {object} a reference to the api object
     * @param {string} scope The scope to be removed.
     */
    removeScope: jest.fn(function (scope) { return api })
  },
  /**
   * Request changes to the authentication state of the current user's session.
   */
  authentication: {
    /**
     * Indicate that a custom authentication method has been completed in the current session. This 
     * method will then be available in the `event.authentication.methods` array in subsequent logins.
     * 
     * Important: This API is only available from within the onContinuePostLogin function for PostLogin 
     * Actions. In other words, this may be used to record the completion of a custom authentication 
     * method after redirecting the user via api.redirect.sendUserTo().
     * 
     * @param {string} provider_url 
     */
    recordMethod: jest.fn(function (provider_url) { return }),
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
    /**
     * Change the primary user for the login transaction.
     * 
     * In scenarios that require linking users, the user identity used to initiate the login may no 
     * longer exist as a discrete user. That identity may now be a secondary identity of an existing 
     * user. In such situations, the setPrimaryUser() function can be used to indicate that the subject 
     * of the login should be changed.
     * 
     * Important:
     * Insecurely linking accounts can allow malicious actors to access legitimate user accounts, your 
     * tenant should request authentication for both accounts before linking occurs. The identity used 
     * to authenticate the login must be among the secondary identities of the user referenced by 
     * `primary_user_id`. The login will fail and tokens will not be issued otherwise.
     * 
     * @param {string} primary_user_id The user ID of the user for whom tokens should be issued (the `sub` claim).
     */
    setPrimaryUser: jest.fn(function (primary_user_id) { return })
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
   * Request changes to the ID token being issued.
   */
  idToken: {
    /**
     * Set a custom claim on the ID token that will be issued upon completion of the login flow.
     * 
     * Returns a reference to the api object.
     * 
     * @returns {object} a reference to the api object
     * @param {string} name Name of the claim (note that this may need to be a fully-qualified url).
     * @param {any} value Any value. The value of the claim.
     */
    setCustomClaim: jest.fn(function (name, value) { return api }),
  },
  /**
   * 
   */
  multifactor: {
    /**
     * Enable multifactor authentication for this login flow. When enabled, users must complete the configured 
     * multifactor challenge. The actual multifactor challenge will be deferred to the end of the login flow.
     * 
     * Returns a reference to the api object.
     * 
     * @returns {object} a reference to the api object
     * @param {string} provider The name of the multifactor provider to use or the value any to use any of the configured providers.
     * 
     * Supported values include:
     *     any Use any of the configured challenges.
     *     duo Use the Duo multifactor provider.
     *     google-authenticator Use the Google Authenticator provider.
     *     guardian Use the Guardian provider.
     *     none Use none of the configured challenges to prevent the MFA flow from triggering.
     * @param {object} options Additional options for enabling multifactor challenges.
     */
    enable: jest.fn(function (provider, options) { return api }),
  },
  /**
   * Make changes to the metadata of the user that is registering.
   */
  user: {
    /**
     * Set metadata for the user that is registering. Data stored within user_metadata is visible 
     * and editable by the user. 
     * 
     * Returns a reference to the api object.
     * 
     * @param {string} name String. The name of metadata property.
     * @param {any} value Any value. The value of the metadata property. This may be set to `null` 
     * to remove the metadata property.
     */
    setUserMetadata: jest.fn(function (name, value) {
      return api
    }),
    /**
     * Set application metadata for the user that is registering. Data stored within app_metadata 
     * is not visible or editable by the user.
     * 
     * Returns a reference to the api object.
     * 
     * @param {string} name String. The name of metadata property.
     * @param {any} value Any value. The value of the metadata property. This may be set to `null` 
     * to remove the metadata property.
     */
    setAppMetadata: jest.fn(function (name, value) {
      return api
    })
  },
  /**
   * 
   */
  redirect: {
    encodeToken: jest.fn(function (options) { return }),
    sendUserTo: jest.fn(function (url, options) { return }),
    validateToken: jest.fn(function (options) { return }),
  },
  /**
   * Modify the SAML Response for the user that is logging in.
   */
  samlResponse: {
    setAttribute: jest.fn(function (attribute, value) { return }),
    setAudience: jest.fn(function (audience) { return }),
    setRecipient: jest.fn(function (recipient) { return }),
    setCreateUpnClaim: jest.fn(function (recipient) { return }),
    setMapUnknownClaimsAsIs: jest.fn(function (mapUnknownClaimsAsIs) { return }),
    setMapIdentities: jest.fn(function (mapIdentities) { return }),
    setDestination: jest.fn(function (destination) { return }),
    setLifetimeInSeconds: jest.fn(function (lifetimeInSeconds) { return }),
    setSignResponse: jest.fn(function (signResponse) { return }),
    setNameIdentifierFormat: jest.fn(function (nameIdentifierFormat) { return }),
    setNameIdentifierProbes: jest.fn(function (nameIdentifierProbes) { return }),
    setAuthnContextClassRef: jest.fn(function (authnContextClassRef) { return }),
    setSigningCert: jest.fn(function (signingCert) { return }),
    setIncludeAttributeNameFormat: jest.fn(function (includeAttributeNameFormat) { return }),
    setTypedAttributes: jest.fn(function (typedAttributes) { return }),
    setEncryptionCert: jest.fn(function (encryptionCert) { return }),
    setCert: jest.fn(function (cert) { return }),
    setKey: jest.fn(function (key) { return }),
  }
}

module.exports = api