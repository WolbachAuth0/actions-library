module.exports = {
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
  authentication: {
    methods: [
      {
        name: 'mfa',
        timestamp: '2018-11-13T20:20:39+00:00',
        type: 'email'
      },
      {
        name: 'passkey',
        timestamp: '2018-11-13T20:22:13+00:00'
      }
    ],
    riskAssessment: {
      confidence: 'low',
      version: '1',
      assessments: {
        UntrustedIP: {
          confidence: 'low',
          code: 'found_on_deny_list',
          details: {
            ip: '1.1.1.1',
            matches: '1.1.1.1/32',
            source: 'STOPFORUMSPAM-1',
            category: 'abuse'
          }
        },
        NewDevice: {
          confidence: 'low',
          code: 'no_match',
          details: {
            device: 'unknown',
            useragent: 'unknown'
          }
        },
        ImpossibleTravel: {
          confidence: 'low',
          code: 'impossible_travel_from_last_login'
        }
      }
    }
  },
  authorization: {
    roles: []
  },
  connection: {
    id: 'con_fpe5kj482KO1eOzQ',
    name: 'Username-Password-Authentication',
    strategy: 'auth0',
    metadata: {}
  },
  organization: {
    display_name: 'My Organization',
    id: 'org_juG7cAQ0CymOcVpV',
    metadata: {},
    name: 'my-organization'
  },
  resource_server: {
    identifier: 'aaron-labs.auth0.com/api/v2'
  },
  tenant: {
    id: 'aaron-labs'
  },
  client: {
    client_id: 'gmOWNgklfRm4tyl5YYnl3JDSJy19h1bR',
    name: 'All Applications',
    metadata: {}
  },
  request: {
    ip: '13.33.86.47',
    method: 'GET',
    query: {
      protocol: 'oauth2',
      client_id: 'gmOWNgklfRm4tyl5YYnl3JDSJy19h1bR',
      response_type: 'code',
      connection: 'Username-Password-Authentication',
      prompt: 'login',
      scope: 'openid profile',
      redirect_uri: 'https://example/tester/callback?connection=Username-Password-Authentication'
    },
    body: {},
    geoip: {
      cityName: 'Bellevue',
      continentCode: 'NA',
      countryCode3: 'USA',
      countryCode: 'US',
      countryName: 'United States of America',
      latitude: 47.61793,
      longitude: -122.19584,
      subdivisionCode: 'WA',
      subdivisionName: 'Washington',
      timeZone: 'America/Los_Angeles'
    },
    hostname: 'aaron-labs.auth0.com',
    language: 'en',
    user_agent: 'curl/7.64.1'
  },
  stats: {
    logins_count: 62
  },
  user: {
    app_metadata: {},
    created_at: '2023-12-18T19:11:51.127Z',
    email_verified: true,
    email: 'j+smith@example.com',
    family_name: 'Smith',
    given_name: 'John',
    identities: [
      {
        connection: 'Username-Password-Authentication',
        isSocial: false,
        provider: 'auth0',
        userId: '5f7c8ec7c33c6c004bbafe82',
        accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gU21pdGgiLCJpYXQiOjE1MTYyMzkwMjJ9.Q_w2AVguPRU2KskCXwR7ZHl09TQXEntfEA8Jj2_Jyew',
        profileData: {},
        user_id: '5f7c8ec7c33c6c004bbafe82'
      }
    ],
    last_password_reset: '2023-12-18T19:11:51.127Z',
    name: 'j+smith@example.com',
    nickname: 'j+smith',
    phone_number: '18882352699',
    phone_verified: false,
    picture: 'http://www.gravatar.com/avatar/?d=identicon',
    updated_at: '2023-12-18T19:11:51.127Z',
    user_id: 'auth0|5f7c8ec7c33c6c004bbafe82',
    user_metadata: {},
    username: 'jsmith',
    multifactor: [],
    enrolledFactors: []
  }
}