const { onExecuteCredentialsExchange } = require('./add-client-metadata')
const event = require('./mocks/event')
const api = require('./mocks/api')

describe('The "Add Client Metadata to Access Token" Action ...', () => {
  it('appends the client.metadata to the access token ', async () => {
    const response = await onExecuteCredentialsExchange(event, api);
    expect(api.accessToken.setCustomClaim).toHaveBeenCalledTimes(1)
    expect(api.accessToken.setCustomClaim).toHaveBeenCalledWith(expect.any(String), event.client.metadata)
  })
})

