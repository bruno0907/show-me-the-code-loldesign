import { calculateCallValues } from "./calculateCallValues"

describe('calculateCallValues', () => {
  it('should return withPlan equals to 0 and withoutPlan equals to duration * rate if duration <= tolerance', () => {
    const callDuration = 20
    const planFee = 1.9
    const planTolerance = 30

    const result = calculateCallValues({ callDuration, planFee, planTolerance })

    expect(result).toStrictEqual({
      withPlan: 0,
      withoutPlan: callDuration * planFee
    })
  })

  it('should return withPlan equals to 10% of fee over exceeded time', () => {
    const callDuration = 40
    const planFee = 1.9
    const planTolerance = 30
    const result = calculateCallValues({ callDuration, planFee, planTolerance })

    expect(result).toStrictEqual({
      withPlan: 20.9,
      withoutPlan: callDuration * planFee
    })
  })
  
})