import { calculatePlan } from "./calculatePlan"

describe('calculatePlan', () => {  
  it('should calculate a plan from a given set of values', () => {
    const origin = '18'
    const destination = '11'
    const duration = 100
    const slug = 'fale_mais_30'

    const result = calculatePlan({ origin, destination, duration, slug })    

    expect(result).toStrictEqual({ 
      planName: 'FaleMais30', 
      withPlan: 146.3, 
      withoutPlan: 190 
    })     
  })
})