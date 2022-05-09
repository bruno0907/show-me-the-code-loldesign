import Link from "next/link"
import { ImArrowRight2 } from 'react-icons/im'

export const CallToAction = () => {
  return (    
    <div className="p-8 flex flex-1 flex-col gap-12 w-full lg:w-1/2" data-testid="cta">
      <h1 className="leading-6 font-semibold text-4xl text-sky-800">FaleMais<span className="text-yellow-400">+</span></h1>
      <p className="text-zinc-600 leading-6 font-medium max-w-[380px]">Simule abaixo quanto você paga hoje em uma ligação sem o FaleMais e quanto pagará com o novo plano FaleMais!</p>
      <div className="flex flex-1 flex-col md:flex-row gap-4 max-w-[380px]">
        <Link href="#">
          <a className="py-3 px-6 font-medium text-zinc-600 bg-yellow-400 flex flex-1 items-center justify-center rounded-lg hover:bg-yellow-300 transition">
            Contrate já
          </a>
        </Link>
        <Link href="#">
  <a className="py-3 px-6 font-medium text-zinc-600 bg-yellow-400 md:text-zinc-600 border-2 border-transparent md:bg-transparent flex flex-1 items-center justify-center rounded-lg hover:bg-yellow-400 transition">
            Ver planos <ImArrowRight2 className="ml-1" />
          </a>
        </Link>
      </div>
    </div>    
  )
}
