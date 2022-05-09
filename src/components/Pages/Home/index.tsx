import { Header } from "../../Header";
import { PlanCalculator } from "./components/PlanCalculator";
import { CallToAction } from "./components/CallToAction";

export const HomePage = () => {
  return (    
    <main className="flex flex-col items-center h-screen w-screen overflow-y-auto">
      <div className="w-full flex flex-col items-center justify-center bg-[url('/banner.jpg')] lg:bg-auto lg:bg-right">
        <Header />
        <section className="w-full lg:max-w-7xl container md:container flex flex-col md:flex-row pt-16 pb-20">                 
          <CallToAction />          
        </section>
      </div>
      <section className="-mt-16 lg:-mt-10 mb-16 z-10 container w-full lg:max-w-7xl flex px-8 items-center justify-center">
        <PlanCalculator />
      </section>
    </main>    
  )
}
