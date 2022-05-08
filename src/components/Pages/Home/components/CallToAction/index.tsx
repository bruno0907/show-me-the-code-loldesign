import Link from "next/link"

export const CallToAction = () => {
  return (    
    <div className="p-8 flex flex-1 flex-col gap-12 w-1/2">
      <h1 className="leading-6 font-semibold text-4xl text-sky-800">FaleMais<span className="text-yellow-400">+</span></h1>
      <p className="max-w-sm text-zinc-600 leading-6">Simule abaixo quanto você paga hoje em uma ligação sem o FaleMais e quanto pagará com o novo plano FaleMais!</p>

      <div className="flex gap-4">
        <Link href="/contrate">
          <a className="py-3 px-6 font-medium text-zinc-600 bg-yellow-400 flex items-center justify-center rounded-lg hover:bg-yellow-300 transition">Contrate já</a>
        </Link>
        <Link href="/planos">
          <a className="py-3 px-6 font-medium text-zinc-600 border-2 border-transparent bg-transparent flex items-center justify-center rounded-lg hover:bg-yellow-400 transition">
            Ver planos
          </a>
        </Link>

      </div>
    </div>    
  )
}