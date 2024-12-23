import {Transition} from '@headlessui/react'
import {Link} from '@inertiajs/react';
import {useState} from 'react'

export default function Header({setIsOpen}) {
    const [DropdownOpen, setDropdownOpen] = useState(false)

    return (
        <header className="flex items-center justify-between px-6 py-4 bg-[#91DDCF] border-b-4 border-[#E8C5E5]">
            <div className="flex items-center">
                <button onClick={() => setIsOpen(true)} className="text-gray-500 focus:outline-none lg:hidden">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4 6H20M4 12H20M4 18H11"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>

            <div className="flex items-center">
                <div className="relative">
                    <button
                        onClick={() => setDropdownOpen(!DropdownOpen)}
                        className="relative z-10 block w-8 h-8 overflow-hidden rounded-full shadow focus:outline-none"
                    >
                        <img
                            className="object-cover w-full h-full"
                            src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=296&q=80"
                            alt="Your avatar"
                        />
                    </button>

                    {DropdownOpen && (
                        <div onClick={() => setDropdownOpen(false)} className="fixed inset-0 z-10 w-full h-full"></div>
                    )}
                    <Transition
                        show={DropdownOpen}
                        enter="transition duration-150 ease-out transform"
                        enterFrom="scale-95 opacity-0"
                        enterTo="scale-100 opacity-100"
                        leave="transition duration-150 ease-in transform"
                        leaveFrom="scale-100 opacity-100"
                        leaveTo="scale-95 opacity-0"
                    >
                        <div className="absolute right-0 z-20 w-48 py-2 mt-2 bg-[#F7F9F2] rounded-md shadow-xl">
                            <Link
                                href={route("logout")}
                                method="post"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#91DDCF] hover:text-white"
                            >
                                Log out
                            </Link>
                        </div>
                    </Transition>
                </div>
            </div>
        </header>
    )
}
