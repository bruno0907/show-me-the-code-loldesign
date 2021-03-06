import Link from "next/link"
import { Fragment } from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import { Logo } from "../Logo"
import { MobileButton } from "./components/MobileButton"
import navigation from '../../utils/navigation.json'

export const Header = () => {
  const classNames = (...classes) => classes.filter(Boolean).join(' ')

  return (
    <header className="w-full flex">
      <Disclosure as="nav" className="relative w-full sm:py-4">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16"> 

                <MobileButton isOpen={open} />

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Disclosure.Panel className="absolute flex flex-col w-full top-16 left-0 sm:hidden bg-zinc-600">                  
                    <div>
                      {navigation.map((link) => (
                        <Link key={link.name} href={link.href} passHref>
                          <Disclosure.Button                          
                            className={classNames(link.current 
                              ? 'bg-yellow-400 text-zinc-600 font-medium'
                              : 'text-zinc-100 hover:bg-yellow-400 hover:text-zinc-800',
                              'p-4 flex w-full'
                            )}
                            aria-current={link.current ? 'page' : undefined}
                          >
                            {link.name}
                          </Disclosure.Button>
                        </Link>
                      ))}
                    </div>                  
                  </Disclosure.Panel>                
                </Transition>

                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                  <Logo />

                  {/* LargeMenuStart */}
                  <div className="w-full hidden sm:flex sm:gap-2 md:gap-4 sm:items-center sm:justify-end sm:ml-6">                    
                    {navigation.map((link) => (
                      <Link key={link.name} href={link.href} passHref>
                        <a className={classNames(link.current 
                            ? 'bg-yellow-400 text-zinc-600 last:ml-auto' 
                            : 'text-zinc-600 hover:bg-yellow-400 hover:text-zinc-600',
                            'py-3 px-6 rounded-lg text-sm font-medium first:ml-auto last:ml-auto last:bg-yellow-400 hover:last:bg-yellow-300'
                          )}
                          aria-current={link.current ? 'page' : undefined}
                        >
                          {link.name}
                        </a>
                      </Link>
                    ))}                    
                  </div>
                  {/* LargeMenuEnd */}
                </div>              
              </div>
            </div>
          </>
        )}
      </Disclosure>
    </header>
  )
}
