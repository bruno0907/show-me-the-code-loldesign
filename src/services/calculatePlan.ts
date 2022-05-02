import { calculateCallValues } from "./calculateCallValues"
import { getFee } from "./getFee"
import { getPlan } from "./getPlan"

type CalculatePlanProps = {
  origin: string;
  destination: string;
  duration: number;
  slug: string;
}

export const calculatePlan = ({ origin, destination, duration, slug }: CalculatePlanProps) => {
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