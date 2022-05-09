import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { fetchPlanResult } from "../../../../../services/fetchPlanResult";
import { CalculatePlan, Fee, Plan, PlanResult } from "../../../../../types";
import { Select } from "../../../../Select";
import { Slider } from "../../../../Slider";
import { Button } from "../../../../Button";
import { Form } from "../../../../Form";
import { getFees } from "../../../../../services/getFees";
import { getPlans } from "../../../../../services/getPlans";
import { ImSpinner7, ImWarning } from "react-icons/im"

export const PlanCalculator = () => { 
  const [fees, setFees] = useState<Fee[]>([])
  const [plans, setPlans] = useState<Plan[]>([])
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
  const [isLoading, setIsLoading] = useState(false)
  
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
      setIsLoading(true)

      setTimeout(async () => {
        const { planName, withPlan, withoutPlan } = await fetchPlanResult(planValues)      

        setPlanResult({
          planName,
          withPlan,
          withoutPlan
        })      
  
        setIsLoading(false)
      }, 1500)
  
    } catch (error) {
      setError(error.message)

    }    
  }

  useEffect(() => {
    getFees()
      .then(response => setFees(response))
      .catch(e => console.log(e))

    getPlans()
      .then(response => setPlans(response))
      .catch(e => console.log(e))
    
  }, [])

  useEffect(() => {    
    const origins = fees.map(fee => fee.origin)
    const codes = Array.from(new Set(origins))
    setOriginAreaCodes(codes)

  }, [fees])

  useEffect(() => {
    const destinations = fees
      .filter(fee => fee.origin === planValues.origin)
      .map(fee => fee.destination)    
    setDestinationAreaCodes(destinations)

  }, [fees, planValues.origin])

  if(error) {
    return (
      <div onSubmit={handlePlanResult} className="w-full flex flex-col xl:flex-row shadow-2xl rounded-2xl overflow-hidden">
        <h3 className="py-3 px-6 w-full xl:w-56 flex items-center justify-center bg-red-600 text-zinc-100 font-medium">
        <ImWarning size={16} className="text-zinc-50 block mr-2 md:hidden" />
          Ocorreu um erro!
        </h3>
        <div className="flex flex-1 gap-4 items-center justify-center bg-white px-16 py-6 shadow-2xl">
          <ImWarning size={32} className="text-zinc-600 hidden md:block" />
          <span>
            <p className="text-zinc-600 font-medium">Não foi possível atender a sua solicitação. Tente novamente.</p>
            <p className="text-zinc-600 font-medium">Se o problema persistir, entre em contato <a href="#" className="text-sky-600 hover:underline hover:underline-offset-2">aqui.</a></p>
          </span>
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
              disabled={isLoading}
            >        
              <option value="" defaultValue="" disabled >Escolha aqui</option>
              {originAreaCodes?.map(code => <option key={code} value={code}>{code}</option>)}
            </Select>           
            <Select 
              name="destination" 
              label="DDD de destino"
              value={planValues.destination}
              onChange={handleChange}
              disabled={!planValues.origin || isLoading}
            >   
              <option value="" defaultValue="" disabled>Escolha aqui</option>
              {destinationAreaCodes?.map(code => <option key={code} value={code}>{code}</option>)}
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
              disabled={!planValues.destination || isLoading}
            />
            <Select
              name="slug"
              label="Plano FaleMais"
              value={planValues.slug}
              onChange={handleChange}
              disabled={!planValues.duration || isLoading}
            >
              <option value="" defaultValue="" disabled>Escolha aqui</option>
              {plans?.map(plan => <option key={plan.id} value={plan.slug}>{plan.name}</option>)}
            </Select>
          </div>
        </div>
        <Button 
          type="submit" 
        className="focus:outline-blue-600 py-3 px-6 w-full xl:w-56 flex items-center justify-center bg-zinc-800 text-zinc-50 font-medium hover:bg-zinc-700 transition" 
          disabled={isLoading}
        >
          {isLoading ? <ImSpinner7 size={24} className="animate-spin text-zinc-50" /> : 'Simular plano!'}
        </Button>
      </Form>    
    </>
  )
}
