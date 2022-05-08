import { Fee, Plan } from "../../../types";
import { Header } from "../../Header";
import { PlanCalculator } from "./components/PlanCalculator";
import { CallToAction } from "./components/CallToAction";
import { Hero } from "./components/Hero";

type HomePageProps = {
  fees: Fee[];
  plans: Plan[];
}

export const HomePage = ({ fees, plans }: HomePageProps) => {  

  return (    
    <main className="flex flex-col items-center h-screen w-screen overflow-y-auto">

      <div className="w-full flex flex-col items-center justify-center bg-[url('/banner.jpg')] bg-right">
        <Header />
        <section className="w-full container flex pt-16 pb-20">                 
          <CallToAction />
          <Hero />        
        </section>
      </div>

      <section className="-mt-10 z-10 container flex px-8 items-center justify-center">
        <PlanCalculator fees={fees} plans={plans}/>
      </section>      
      
    </main>    
  )
}
