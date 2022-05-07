import { CalculateCallValues } from "../types"

export const calculateCallValues = ({ callDuration, planFee, planTolerance }: CalculateCallValues) => {
  const callCharge = callDuration * planFee
  const callSurplus = callDuration - planTolerance
  const planCharge = callSurplus * planFee
  const feeSurplus = callSurplus * planFee * 10 / 100

  if(callDuration <= planTolerance) {
    return {
      withPlan: 0,
      withoutPlan: callCharge
    }
  }
    
  return {
    withPlan: planCharge + feeSurplus,
    withoutPlan: callCharge
  }  
}