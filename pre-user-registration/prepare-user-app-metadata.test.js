const { onExecutePreUserRegistration } = require('./prepare-user-app-metadata')
const api = require('./mocks/api')
let event = require('./mocks/event')

const registrationClientId = 'VYA85jQ5XwI2btsAnNd4I9YHaCmj5aDz'
const appMetadataKey = 'm2m_clients'

describe('The "Prepare User app_metadata" action ...', () => {
  describe('When the user is registering from the External API Website ...', () => {
    beforeEach(() => {
      jest.clearAllMocks()
      // set the client.client_id to equal the Externa API Website's client id.
      event.client.client_id = registrationClientId
    })

    it('should append an empty array to the user.app_metadata', async () => {
      const response = await onExecutePreUserRegistration(event, api);
      expect(api.user.setAppMetadata).toHaveBeenCalledTimes(1)
      expect(api.user.setAppMetadata).toHaveBeenCalledWith(appMetadataKey, [])
    })
  })

  describe('When the event occurs outside of the context of the External API Website ... ', () => {
    beforeEach(() => {
      jest.clearAllMocks()
    })

    it('When called by another client app, it should do nothing.', async () => {
      // set the client.client_id to be something other than the Externa API Website's client id.
      event.client.client_id = 'XXXXXXXXXXXXXX'
      const response = await onExecutePreUserRegistration(event, api)
      expect(api.user.setAppMetadata).not.toHaveBeenCalled()
    })

    it('When no client context exists, it should do nothing.', async () => {
      // set the client.client_id to be something other than the Externa API Website's client id.
      event.client = undefined
      await onExecutePreUserRegistration(event, api)
      event.client = {}
      await onExecutePreUserRegistration(event, api)

      expect(api.user.setAppMetadata).not.toHaveBeenCalled()
    })
  })

})


