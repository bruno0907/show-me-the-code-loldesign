import { ChangeEvent, useEffect, useState } from "react";
import { calculatePlan } from "../../../services/calculatePlan";
import { getCodes } from "../../../services/getCodes";
import { getPlans } from "../../../services/getPlans";
import { Select } from "../../Select";
import { Slider } from "../../Slider";
import { SubmitButton } from "../../SubmitButton";

type CalculatePlan = {
  origin: string;
  destination: string;
  duration: number;  
  slug: string;
}

type PlanProps = {  
  id: string;
  name: string;
  description: string;
  tolerance: number;  
  slug: string;
}

type PlanResultProps = {
  planName: string;
  withPlan: string;
  withoutPlan: string;
}

export default function Home() {
  const [codeList, setCodeList] = useState<string[]>([])
  const [state, setState] = useState<CalculatePlan>({
    origin: '',
    destination: '',
    duration: 0,
    slug: ''
  })  
  const [plansList, setPlansList] = useState<PlanProps[]>([])
  const [planResult, setPlanResult] = useState<PlanResultProps>(null)
  
  const handleChange = (event: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = event.target
    const newState = {
      ...state,
      [name]: value,
    }    
    setState(newState)
  }

  const fetchPlanResult = ({ origin, destination, duration, slug }: CalculatePlan) => {
    // const { planName, withPlan, withoutPlan } = calculatePlan({
    //   origin,
    //   destination,
    //   duration,
    //   slug
    // })

    // setPlanResult({
    //   planName,
    //   withPlan: Intl.NumberFormat('pt-br', { currency: 'BRL' }).format(withPlan),
    //   withoutPlan: Intl.NumberFormat('pt-br', { currency: 'BRL' }).format(withoutPlan)
    // })

    console.log(origin, destination, duration, slug)
  }

  useEffect(() => {    
    const codes = getCodes()
    setCodeList(codes)

  }, [])
  
  useEffect(() => {
    const plans = getPlans() 
    setPlansList(plans)
  }, [])

  return (
    <main>

      { planResult ? (
        <>
          <h1>{planResult.planName}</h1>
          <p>{planResult.withPlan}</p>
          <p>{planResult.withoutPlan}</p>
        </>
      ) : (
        <>
          <h1>Planos FaleMais</h1>
    
          <p>Com o novo plano FaleMais da Telzir você nosso cliente é quem ganha.</p>
          
          <p>Para calcular o custo de sua ligação com os novos planos siga a orientação abaixo</p>
    
          <p>Selecione o DDD de origem</p>
          <p>Selecione o DDD de destino</p>
          <p>Selecione o tempo da ligação</p>
          <p>Selecione o plano FaleMais</p>
          <Select 
            name="origin" 
            label="Selecione o DDD de origem"
            value={state.origin}
            onChange={handleChange}
          >        
            {codeList.map(code => <option id="origin-code-select" key={code} value={code}>{code}</option>)}
          </Select>
    
          <Select 
            name="destination" 
            label="Selecione o DDD de destino"
            value={state.destination}
            onChange={handleChange}
          >        
            {codeList.map(code => <option id="origin-code-select" key={code} value={code}>{code}</option>)}
          </Select>
    
          <Slider 
            name="duration" 
            label="Tempo de ligação"
            min={0}
            max={200}
            value={state.duration}
            onChange={handleChange}
          />
    
          <ul>
            {plansList.map(plan => (
              <li key={plan.id}>
                <article>            
                  <h3>{plan.name}</h3>
                  <p>{plan.description}</p>
                  <p>{plan.tolerance}</p>             
                </article>
              </li>
            ))}
          </ul>
    
          <SubmitButton onClick={() => fetchPlanResult(state)}>Calcular plano</SubmitButton>
        </>
      )}


    </main>
  )
}
