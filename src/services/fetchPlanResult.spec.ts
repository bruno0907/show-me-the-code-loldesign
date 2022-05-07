import { waitFor } from '@testing-library/react'
import AxiosMock from 'axios-mock-adapter'
import { api } from '../infra/api'
import { fetchPlanResult } from './fetchPlanResult'

const apiMock = new AxiosMock(api)

const mockData = {
  origin: '11',
  destination: '16',
  duration: 20,
  slug: 'fale_mais_30'
}

const {
  origin,
  destination,
  duration,
  slug
} = mockData

describe('fetchPlanResult', () => {
  beforeEach(() => {
    apiMock.reset()
  })

  it('should return results for planName, withPlan and withoutPlan', async () => {    
    apiMock.onPost('/api/getPlanResult', {      
      origin,
      destination,
      duration,
      slug      
    }).reply(200, {
      planName: 'FaleMais30',
      withPlan: '0',
      withoutPlan: '38'
    })
    const response = await fetchPlanResult({ origin, destination, duration, slug })        
    expect(response).toEqual({
      planName: 'FaleMais30', 
      withPlan: '0', 
      withoutPlan: '38' 
    })
  })
})