import { Disclosure } from '@headlessui/react'
import { XIcon, MenuIcon } from '@heroicons/react/outline'

type MobileButtonProps = {
  isOpen: boolean;
}

export const MobileButton = ({ isOpen }: MobileButtonProps ) => {
  return (
    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">                
      <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-lg text-zinc-600 hover:text-zinc-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-zinc-600">
        <span className="sr-only">Abrir o menu de navegação</span>
        {isOpen ? (
          <XIcon className="block h-6 w-6" aria-hidden="true" />
        ) : (
          <MenuIcon className="block h-6 w-6" aria-hidden="true" />
        )}
      </Disclosure.Button>
    </div>
  )
}

