export type CalculatePlan = {
  origin: string;
  destination: string;
  duration: number;   
  slug: string;
}

export type Plan = {  
  id: string;
  name: string;
  description: string;
  tolerance: number;  
  slug: string;
}

export type PlanResult = {
  planName: string;
  withPlan: string;
  withoutPlan: string;
}

export type Fee = {
  origin: string;
  destination: string;
  fee: number;
}

export type CalculateCallValues = {
  callDuration: number;
  planFee: number;
  planTolerance: number;
}