import { GetStaticProps } from "next";
import { HomePage } from "../components/Pages/Home";
import { getFees } from "../services/getFees";
import { getPlans } from "../services/getPlans";
import { Fee, Plan } from "../types";

type HomeProps = {
  fees: Fee[];
  plans: Plan[];
}

export default function Index({ fees, plans }: HomeProps) {
  return <HomePage fees={fees} plans={plans} />
}

export const getStaticProps: GetStaticProps = async () => {
  const fees = await getFees()
  const plans = await getPlans()
  
  return {
    props: {
      fees,
      plans
    }
  }
}