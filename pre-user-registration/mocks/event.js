module.exports = {
  request: {
    method: 'POST',
    ip: '13.33.86.47',
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
    hostname: 'aaron-labs.example.com',
    language: 'en',
    user_agent: 'curl/7.64.1',
    body: {
      'ulp-custom-field': 'UlpCustomField'
    }
  },
  transaction: {
    acr_values: [],
    locale: 'en',
    requested_scopes: [],
    ui_locales: [
      'en'
    ],
    protocol: 'oidc-basic-profile'
  },
  connection: {
    id: 'con_fpe5kj482KO1eOzQ',
    strategy: 'stragegy',
    name: 'Username-Password-Authentication',
    metadata: {}
  },
  tenant: {
    id: 'aaron-labs'
  },
  client: {
    client_id: 'gmOWNgklfRm4tyl5YYnl3JDSJy19h1bR',
    metadata: {},
    name: 'All Applications'
  },
  user: {
    app_metadata: {},
    email: 'j+smith@example.com',
    family_name: 'Smith',
    given_name: 'John',
    name: 'John Smith',
    nickname: 'j+smith',
    picture: 'http://www.gravatar.com/avatar/?d=identicon',
    user_metadata: {},
    username: 'j+smith',
    phone_number: '123-123-1234'
  }
}