import { getFees } from "./getFees"
import fees from "../utils/fees"
import AxiosMock from 'axios-mock-adapter'
import { api } from "../infra/api"

const apiMock = new AxiosMock(api)

describe('getFees', () => {
  beforeEach(() => {
    apiMock.reset()
  })

  it('should return a list of fees', async () => {
    apiMock.onGet('/api/fees').reply(200, fees)        
    const result = await getFees()    
    expect(result).toEqual(fees)
  })
})