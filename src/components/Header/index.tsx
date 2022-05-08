import Link from "next/link"

export const Header = () => {
  return (
    <header className="p-8 flex flex-1 items-center justify-between container">
      <h1 className="font-sans font-bold text-4xl text-zinc-600"><span className="text-yellow-400">+</span>telzir</h1>
      <nav className="flex flex-1 gap-4 items-center justify-end">        
        <Link href="/contratar" passHref>
          <a className="py-3 px-6 font-medium text-zinc-600 border-2 border-zinc-600 bg-transparent flex items-center justify-center rounded-lg hover:bg-yellow-400 hover:border-yellow-400 transition">Contrate já!</a>
        </Link>
      </nav>
    </header>
  )
}