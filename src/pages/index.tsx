import { GetStaticProps } from "next";
import Home from "../components/Pages/Home";
import { getFees } from "../services/getFees";
import { getPlans } from "../services/getPlans";
import { Fee, Plan } from "../types";

type Props = {
  plans: Plan[];
  fees: Fee[];
}

export default function Index({ plans, fees }: Props) {
  return (
    <Home plans={plans} fees={fees} />
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const plans = await getPlans()
  const fees = await getFees()   

  return {
    props: {
      plans,
      fees
    }
  }
}