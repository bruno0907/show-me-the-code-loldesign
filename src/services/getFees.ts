import { api } from "../infra/api"
import { Fee } from "../types"

export const getFees = async (): Promise<Fee[]> => {
  const { data } = await api.get('/api/fees')
  return data
}