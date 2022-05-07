import { api } from "../infra/api"
import { CalculatePlan, PlanResult } from "../types"

export const fetchPlanResult = async ({ origin, destination, duration, slug }: CalculatePlan) => {
  const { data } = await api.post<PlanResult>('/api/getPlanResult', {    
    origin,
    destination,
    duration,
    slug    
  })

  return data
}