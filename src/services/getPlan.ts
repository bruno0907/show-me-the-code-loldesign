import plans from "../utils/plans.json"

export const getPlan = (slug: string) => {
  const plan = plans.find(plan => plan.slug === slug)
  return plan
}