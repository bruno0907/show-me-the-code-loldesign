import { getPlans } from "./getPlans"
import AxiosMock from 'axios-mock-adapter'
import { api } from "../infra/api"
import plans from "../utils/plans"

const axiosMock = new AxiosMock(api)

describe('getPlans', () => {
  beforeEach(() => {
    axiosMock.reset()    
  })
  it('should return a list plans', async () => {
    axiosMock.onGet('/api/plans').reply(200, plans)
    const result = await getPlans()
    expect(result).toEqual(plans)
  })
})