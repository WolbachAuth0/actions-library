module.exports = {
  message_options: {
    action: 'enrollment',
    code: '1234556ADSFA547865',
    message_type: 'sms',
    recipient: '+1-808-555-5555',
    text: 'Here is your one time password!'
  },
  client: {
    client_id: 'gmOWNgklfRm4tyl5YYnl3JDSJy19h1bR',
    name: 'All Applications',
    metadata: {}
  },
  request: {
    ip: '13.33.86.47',
    hostname: 'aaron-labs.auth0.com',
    user_agent: 'curl/7.64.1',
    method: 'POST',
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
    language: 'en'
  },
  tenant: {
    id: 'aaron-labs'
  },
  user: {
    user_id: 'auth0|5f7c8ec7c33c6c004bbafe82',
    name: 'John Smith',
    email: 'j+smith@example.com',
    app_metadata: {},
    user_metadata: {},
    picture: 'http://www.gravatar.com/avatar/?d=identicon',
    created_at: '2023-12-19T18:42:04.866Z',
    email_verified: true,
    updated_at: '2023-12-19T18:42:04.866Z',
    multifactor: [
      'guardian'
    ],
    family_name: 'Smith',
    given_name: 'John',
    nickname: 'j+smith',
    last_password_reset: '2023-12-19T18:42:04.866Z',
    identities: [
      {
        connection: 'Username-Password-Authentication',
        isSocial: false,
        provider: 'auth0',
        userId: '5f7c8ec7c33c6c004bbafe82',
        accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gU21pdGgiLCJpYXQiOjE1MTYyMzkwMjJ9.Q_w2AVguPRU2KskCXwR7ZHl09TQXEntfEA8Jj2_Jyew',
        profileData: {},
        user_id: 'auth0|5f7c8ec7c33c6c004bbafe82'
      }
    ],
    phone_number: '+1-808-555-5555',
    phone_verified: false,
    username: 'j+smith'
  }
}