import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { fetchPlanResult } from "../../../../../services/fetchPlanResult";
import { CalculatePlan, Fee, Plan, PlanResult } from "../../../../../types";
import { Select } from "../../../../Select";
import { Slider } from "../../../../Slider";
import { SubmitButton } from "../../../../SubmitButton";

type HomeProps = {
  plans: Plan[];
  fees: Fee[];
}

export const PlanCalculator = ({ plans, fees }: HomeProps) => {  
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
      <div className="flex flex-1">
        <div className="flex flex-1 gap-20 items-center bg-white p-6 rounded-tl-xl rounded-bl-xl shadow-2xl">
          <article>
            <h1>Plano escolhido</h1>
            <h3>{planResult.planName}</h3>
          </article>
          <article>
            <h1>Com o plano</h1>
            <p>{planResult.withPlan}</p>
          </article>

          <article>
            <h1>Sem o plano</h1>
            <p>{planResult.withoutPlan}</p>
          </article>            

        </div>
        <button 
          type="button" 
          className="py-3 px-6 w-56 flex items-center justify-center bg-zinc-800 text-zinc-50 font-medium rounded-tr-lg rounded-br-lg hover:bg-zinc-700  transition"
          onClick={() => setPlanResult(null)}
        >
          Simule outro plano!
        </button>
      </div>
    )
  }  

  return (
    <form onSubmit={handlePlanResult} className="flex flex-1">
      <div className="flex flex-1 gap-8 items-center justify-between bg-white p-6 rounded-tl-xl rounded-bl-xl shadow-2xl">
        <Select 
          name="origin" 
          label="DDD de origem"
          value={planValues.origin}
          onChange={handleChange}
        >        
          <option value="" defaultValue="" disabled >Escolha aqui</option>
          {originAreaCodes.map(code => <option key={code} value={code}>{code}</option>)}
        </Select>           
        <Select 
          name="destination" 
          label="DDD de destino"
          value={planValues.destination}
          onChange={handleChange}
          disabled={!planValues.origin}
        >   
          <option value="" defaultValue="" disabled>Escolha aqui</option>
          {destinationAreaCodes.map(code => <option key={code} value={code}>{code}</option>)}
        </Select>     
        <Slider 
          name="duration" 
          label="Duração da ligação"
          min={0}
          max={200}
          value={planValues.duration}
          onChange={handleChange}
          disabled={!planValues.destination}
        />
        <Select
          name="slug"
          label="Plano FaleMais"
          value={planValues.slug}
          onChange={handleChange}
          disabled={!planValues.duration}
        >
          <option value="" defaultValue="" disabled>Escolha aqui</option>
          {plans.map(plan => <option key={plan.id} value={plan.slug}>{plan.name}</option>)}
        </Select>
      </div>       
      <button type="submit" className="py-3 px-6 w-56 flex items-center justify-center bg-zinc-800 text-zinc-50 font-medium rounded-tr-lg rounded-br-lg hover:bg-zinc-700  transition">Simular plano!</button>
    </form>    
  )
}
