module.exports = {
  accessToken: {
    scope: [
      'read:entity'
    ],
    customClaims: {}
  },
  transaction: {
    requested_scopes: [
      'read:entity'
    ]
  },
  resource_server: {
    identifier: 'aaron-labs.auth0.com/api/v2'
  },
  tenant: {
    id: 'aaron-labs'
  },
  client: {
    client_id: 'client-id',
    name: 'A Client Application',
    metadata: {
      key: 'value'
    }
  },
  request: {
    ip: '10.12.13.1',
    method: 'POST',
    body: {
      client_id: 'client-id',
      client_secret: 'client-secret',
      audience: 'aaron-labs.auth0.com/api/v2',
      grant_type: 'client_credentials'
    },
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
  organization: {
    display_name: 'My Organization',
    id: 'org_juG7cAQ0CymOcVpV',
    metadata: {
      key: 'value'
    },
    name: 'my-organization'
  }
}