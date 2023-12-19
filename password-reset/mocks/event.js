module.exports = {
  authentication: {
    methods: [
      {
        name: 'mfa',
        timestamp: '2018-11-13T20:20:39+00:00',
        type: 'email'
      }
    ]
  },
  authorization: {
    roles: []
  },
  client: {
    client_id: 'gmOWNgklfRm4tyl5YYnl3JDSJy19h1bR',
    metadata: {},
    name: 'All Applications'
  },
  connection: {
    id: 'con_fpe5kj482KO1eOzQ',
    name: 'Username-Password-Authentication',
    strategy: 'auth0',
    metadata: {}
  },
  request: {
    hostname: 'aaron-labs.auth0.com',
    ip: '13.33.86.47',
    method: 'POST',
    query: {
      protocol: 'oauth2',
      client_id: 'gmOWNgklfRm4tyl5YYnl3JDSJy19h1bR',
      response_type: 'code',
      connection: 'Username-Password-Authentication',
      prompt: 'login',
      scope: 'openid profile',
      redirect_uri: 'https://example/tester/callback?connection=Username-Password-Authentication'
    },
    geoip: {
      cityName: 'Bellevue',
      countryName: 'United States of America',
      latitude: 47.61793,
      longitude: -122.19584,
      continentCode: 'NA',
      countryCode: 'US',
      countryCode3: 'USA',
      subdivisionCode: 'WA',
      subdivisionName: 'Washington',
      timeZone: 'America/Los_Angeles'
    },
    body: {
      client_id: 'client-id',
      client_secret: 'client-secret',
      audience: 'aaron-labs.auth0.com/api/v2',
      grant_type: 'client_credentials'
    },
    language: 'en',
    user_agent: 'curl/7.64.1'
  },
  stats: {
    logins_count: 62
  },
  tenant: {
    id: 'aaron-labs'
  },
  user: {
    user_id: 'auth0|5f7c8ec7c33c6c004bbafe82',
    app_metadata: {},
    created_at: '2023-12-19T18:24:56.231Z',
    email: 'j+smith@example.com',
    email_verified: true,
    identities: [],
    name: 'j+smith@example.com',
    nickname: 'j+smith',
    picture: 'http://www.gravatar.com/avatar/?d=identicon',
    updated_at: '2023-12-19T18:24:56.231Z',
    user_metadata: {},
    family_name: 'Smith',
    given_name: 'John',
    last_password_reset: '2023-12-19T18:24:56.231Z',
    phone_number: '18882352699',
    phone_verified: false,
    username: 'jsmith',
    enrolledFactors: []
  },
  transaction: {
    acr_values: [],
    locale: 'en',
    requested_scopes: [],
    ui_locales: [
      'en'
    ],
    protocol: 'oidc-basic-profile',
    redirect_uri: 'http://someuri.com',
    prompt: [
      'none'
    ],
    login_hint: 'test@test.com',
    response_mode: 'form_post',
    response_type: [
      'id_token'
    ],
    state: 'AABBccddEEFFGGTTasrs',
    requested_authorization_details: [
      {
        type: 'foo'
      }
    ],
    linking_id: 'abc_dynamic_linking_id_123'
  },
  organization: {
    display_name: 'My Organization',
    id: 'org_juG7cAQ0CymOcVpV',
    metadata: {},
    name: 'my-organization'
  }
}