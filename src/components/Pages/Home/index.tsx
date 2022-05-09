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
      <div className="w-full flex flex-col items-center justify-center bg-[url('/banner-mobile.jpg')] md:bg-[url('/banner-md.jpg')] xl:bg-[url('/banner.jpg')] bg-cover bg-right">
        <Header />
        <section className="w-full lg:max-w-7xl container md:container flex flex-col md:flex-row pt-16 pb-20">                 
          <CallToAction />
          <Hero />
        </section>
      </div>
      <section className="-mt-16 lg:-mt-10 mb-16 z-10 container w-full lg:max-w-7xl flex px-8 items-center justify-center">
        <PlanCalculator fees={fees} plans={plans} />
      </section>
    </main>    
  )
}
