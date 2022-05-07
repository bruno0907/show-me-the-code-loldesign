import { NextApiRequest, NextApiResponse } from "next";
import { calculatePlan } from "../../services/calculatePlan";

export default function handler(request: NextApiRequest, response: NextApiResponse) {
  const { origin, destination, duration, slug } = request.body    

  const { planName, withPlan, withoutPlan } = calculatePlan({
    origin,
    destination,
    duration,
    slug
  })

  return response.status(200).json({
    planName,
    withPlan: Intl.NumberFormat('pt-br', { currency: 'BRL' }).format(withPlan),
    withoutPlan: Intl.NumberFormat('pt-br', { currency: 'BRL' }).format(withoutPlan)
  })
}