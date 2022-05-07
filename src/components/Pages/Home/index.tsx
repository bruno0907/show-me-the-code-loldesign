import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { fetchPlanResult } from "../../../services/fetchPlanResult";
import { CalculatePlan, Fee, Plan, PlanResult } from "../../../types";
import { List } from "../../List";
import { Select } from "../../Select";
import { Slider } from "../../Slider";
import { SubmitButton } from "../../SubmitButton";

type HomeProps = {
  plans: Plan[];
  fees: Fee[];
}

export default function Home({ plans, fees }: HomeProps) {
  const [originAreaCodes, setOriginAreaCodes] = useState([''])
  const [destinationAreaCodes, setDestinationAreaCodes] = useState([''])
  const [planValues, setPlanValues] = useState<CalculatePlan>({
    origin: '',
    destination: '',
    duration: 0,    
    slug: ''
  })  
  const [planResult, setPlanResult] = useState<PlanResult>(null)
  const [error, setError] = useState<string | null>(null)
  
  const handleChange = (event: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = event.target
    const newState = {
      ...planValues,
      [name]: value,
    }    
    setPlanValues(newState)    
  }    

  const handlePlanResult = async (event: FormEvent) => {
    event.preventDefault()

    try {
      const { planName, withPlan, withoutPlan } = await fetchPlanResult(planValues)      
  
      setPlanResult({
        planName,
        withPlan,
        withoutPlan
      })      
    } catch (error) {
      setError(error.message)

    }    
  }

  useEffect(() => {    
    const origins = fees.map(fee => fee.origin)
    const codes = Array.from(new Set(origins))
    setOriginAreaCodes(codes)

  }, [])

  useEffect(() => {
    const destinations = fees
      .filter(fee => fee.origin === planValues.origin)
      .map(fee => fee.destination)    
    setDestinationAreaCodes(destinations)

  }, [planValues.origin])

  if(error) {
    return (
      <main>
        <p>{error}</p>
        <button type="button" onClick={() => setError(null)}>Tentar outros DDD's</button>
      </main>
    )
  }

  if(planResult) {
    return (
      <main>
        <>
          <h1>{planResult.planName}</h1>
          <p>{planResult.withPlan}</p>
          <p>{planResult.withoutPlan}</p>
          <button type="button" onClick={() => setPlanResult(null)}>Calcular outro plano</button>
        </>
      </main>
    )
  }  

  return (
    <main className="m-auto w-[960px] p-4 flex flex-col gap-8 items-center border-red-500 border-2">      
      <h1 className="text-4xl font-bold text-blue-600">Planos FaleMais</h1>   
      <form onSubmit={handlePlanResult} className="flex flex-col gap-8 container"> 
        <fieldset className="flex gap-4">
          <div className="flex flex-col gap-4 w-1/2">
            <Select 
              name="origin" 
              label="DDD de origem"
              value={planValues.origin}
              onChange={handleChange}
            >        
              <option value="" defaultValue="" disabled >DDD</option>
              {originAreaCodes.map(code => <option id="origin-code-select" key={code} value={code}>{code}</option>)}
            </Select>           
            <Select 
              name="destination" 
              label="DDD de destino"
              value={planValues.destination}
              onChange={handleChange}
              disabled={!planValues.origin}
            >   
              <option value="" defaultValue="" disabled>DDD</option>
              {destinationAreaCodes.map(code => <option id="origin-code-select" key={code} value={code}>{code}</option>)}
            </Select> 
            <Slider 
              name="duration" 
              label="Tempo de ligação"
              min={0}
              max={200}
              value={planValues.duration}
              onChange={handleChange}
              disabled={!planValues.destination}
            />
          </div>
          <div className="container">
            <List>
              {plans.map(plan => (
                <li key={plan.id}>
                  <label htmlFor={plan.slug} className="p-6 flex items-center justify-between bg-zinc-50 rounded-lg shadow">
                    <span className="flex flex-col">
                      <span className="text-2xl font-semibold">{plan.name}</span>
                      <span className="text-zinc-500 leading-none">
                        Com o {plan.name} você tem {plan.tolerance} minutos <br/> de franquia para falar de graça.
                      </span>                      
                    </span>
                    <input
                      id={plan.slug}                    
                      type="radio"
                      name="slug"
                      value={plan.slug}
                      onChange={handleChange}                  
                    />
                  </label>
                </li>
              ))}
            </List>
          </div>
        </fieldset>
        <SubmitButton>Calcular plano</SubmitButton>        
      </form>
    </main>
  )
}
