import { CalculatePlan } from "../types";
import { calculateCallValues } from "./calculateCallValues"
import { getFee } from "./getFee"
import { getPlan } from "./getPlan"

export const calculatePlan = ({ origin, destination, duration, slug }: CalculatePlan) => {  
  const { name, tolerance } = getPlan(slug) 

  const { fee } = getFee(origin, destination)  

  const { withPlan, withoutPlan } = calculateCallValues({ 
    callDuration: duration, 
    planFee: fee, 
    planTolerance: tolerance
  }) 

  return {
    planName: name,
    withPlan,
    withoutPlan
  }      
}