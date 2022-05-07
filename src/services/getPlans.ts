import { api } from "../infra/api"
import { Plan } from "../types"

export const getPlans = async (): Promise<Plan[]> => {
  const { data } = await api.get('/api/plans')
  return data
}