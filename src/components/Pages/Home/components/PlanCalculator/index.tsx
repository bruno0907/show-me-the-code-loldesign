import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { fetchPlanResult } from "../../../../../services/fetchPlanResult";
import { CalculatePlan, Fee, Plan, PlanResult } from "../../../../../types";
import { Select } from "../../../../Select";
import { Slider } from "../../../../Slider";
import { Button } from "../../../../Button";
import { Form } from "../../../../Form";

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
      <div onSubmit={handlePlanResult} className="w-full flex flex-col xl:flex-row shadow-2xl rounded-2xl overflow-hidden">
        <h3 className="py-3 px-6 w-full xl:w-56 flex items-center justify-center bg-red-600 text-zinc-100 font-medium">Ocorreu um erro!</h3>
        <div className="flex flex-1 flex-col gap-4 items-center justify-between bg-white px-16 py-6 shadow-2xl">                     
          <p className="text-zinc-600 font-medium">Não foi possível atender a sua solicitação. Tente novamente.</p>
          <p className="text-zinc-600 font-medium">Se o problema persistir, entre em contato <a href="#" className="text-sky-600 hover:underline hover:underline-offset-2">aqui</a></p>
        </div>
        <Button type="button" className="py-3 px-6 w-full xl:w-56 flex items-center justify-center bg-zinc-800 text-zinc-50 font-medium hover:bg-zinc-700 transition"onClick={() => setError(null)}>Tentar novamente</Button>
      </div>
    )
  }

  if(planResult) {
    return (
      <div onSubmit={handlePlanResult} className="w-full flex flex-col xl:flex-row shadow-2xl rounded-2xl overflow-hidden">
        <h3 className="py-3 px-6 w-full xl:w-56 flex items-center justify-center bg-yellow-400 text-zinc-600 font-medium">
          Sua simulação!
        </h3>
        <div className="flex flex-1 flex-col md:flex-row gap-10 lg:gap-24 px-10 items-center justify-between bg-white p-6">
          <article className="flex flex-col flex-1">
            <h3 className="font-medium text-zinc-600">Plano escolhido</h3>
            <p className="font-bold text-3xl text-sky-700">{planResult.planName ?? ''}</p>
          </article>
          <article>
            <h3 className="font-medium text-zinc-600">Com o novo plano</h3>
            <p className="font-bold text-3xl text-sky-700">{planResult.withPlan ?? ''}</p>
          </article>
          <article>
            <h3 className="font-medium text-zinc-600">Sem o novo plano</h3>
            <p className="font-bold text-3xl text-sky-700">{planResult.withoutPlan ?? ''}</p>
          </article>
        </div>
        <Button type="button" className="py-3 px-6 w-full xl:w-56 flex items-center justify-center bg-zinc-800 text-zinc-50 font-medium hover:bg-zinc-700 transition" onClick={() => setPlanResult(null)}>Simule outro plano!</Button>
      </div>
    )
  }  

  return (
    <>
      <Form onSubmit={handlePlanResult} className="w-full flex flex-col xl:flex-row shadow-2xl rounded-2xl overflow-hidden">
        <h3 className="py-3 px-6 w-full xl:w-56 flex items-center justify-center bg-yellow-400 text-zinc-600 font-medium">Faça sua simulação</h3>
        <div className="flex flex-1 flex-col lg:flex-row gap-4 items-center justify-between bg-white p-6">                    
          <div className="w-full flex flex-col lg:flex-row gap-4">
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
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-4">
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
        </div>
        <Button type="submit" className="py-3 px-6 w-full xl:w-56 flex items-center justify-center bg-zinc-800 text-zinc-50 font-medium hover:bg-zinc-700 transition">Simular plano!</Button>
      </Form>    
    </>
  )
}
