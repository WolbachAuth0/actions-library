const api = {
  /**
   * Control availability to the access token.
   */
  access: {
    /**
     * Mark the current token exchange as denied.
     * 
     * @returns {object} a reference to the api object
     * @param {string} code The OAuth error code justifying the rejection of the login. Should be one of: 'invalid_scope', 'invalid_request', or 'server_error'
     * @param {string} reason A human-readable explanation for rejecting the access token grant.
     */
    deny: jest.fn(function (code, reason) {
      return api
    })
  },
  /**
   * Request changes to the access token being issued.
   */
  accessToken: {
    /**
     * Set a custom claim on the Access Token that will be issed as a part of this exchange.
     * 
     * @returns {object} a reference to the api object
     * @param {string} name Name of the claim (note that this may need to be a fully-qualified url).
     * @param {any} value Any value. The value of the claim.
     */
    setCustomClaim: jest.fn(function (name, value) {
      return api
    })
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
  }
}

module.exports = api
