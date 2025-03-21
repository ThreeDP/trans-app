'use client'

import Link from 'next/link'
import {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react';

import { Bars3Icon } from '@heroicons/react/24/outline'
import { NavSectionsOptions, CallsToAction } from '../_models/navOptions'
import { NavOptions } from './NavOptions'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const NavBar = () => {
    return (
        <>
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                <Link href="/" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img
                    alt=""
                    src="/assets/icon/favicon.svg"
                    className="h-8 w-auto"
                    />
                </Link>
                </div>
                <div className="flex lg:hidden">
                <button
                    type="button"
                    onClick={() => setMobileMenuOpen(true)}
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                >
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon aria-hidden="true" className="size-6" />
                </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                <Popover className="relative">
                    <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
                    Game Section
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                    </PopoverButton>
            
                    <PopoverPanel
                    transition
                    className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                    >
                    <div className="p-4">
                        {NavSectionsOptions.map((item) => (
                        <div
                            key={item.name}
                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                        >
                            <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                            </div>
                            <div className="flex-auto">
                            <Link href={item.href} className="block font-semibold text-gray-900">
                                {item.name}
                                <span className="absolute inset-0" />
                            </Link>
                            <p className="mt-1 text-gray-600">{item.description}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                        {CallsToAction.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                        >
                            <item.icon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                            {item.name}
                        </a>
                        ))}
                    </div>
                    </PopoverPanel>
                </Popover>
            
                <Link href="/perfil" className="text-sm/6 font-semibold text-gray-900">
                    Perfil
                </Link>
                <a href="#" className="text-sm/6 font-semibold text-gray-900">
                    Marketplace
                </a>
                <a href="#" className="text-sm/6 font-semibold text-gray-900">
                    Company
                </a>
                </PopoverGroup>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <a href="#" className="text-sm/6 font-semibold text-gray-900">
                    Log in <span aria-hidden="true">&rarr;</span>
                </a>
                </div>
            </nav>
            <NavOptions Actions={NavSectionsOptions} SubActions={CallsToAction}/>
        </>
    );
}

export { NavBar, NavSectionsOptions, CallsToAction }