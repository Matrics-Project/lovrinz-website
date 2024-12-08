export default function Sidebar({ IsOpen, setIsOpen }) {
    return (
        <div className="flex text-white">
            <div
                onClick={() => setIsOpen(false)}
                className={'fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden ' + (IsOpen ? 'block' : 'hidden')}
            ></div>

            <div
                className={
                    'fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-[#F19ED2] lg:translate-x-0 lg:static lg:inset-0 ' +
                    (IsOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in')
                }
            >
                <a className="flex items-center justify-center mt-8" href="/admin/dashboard">
                    <div className="flex items-center">
                        <img className="w-16 rounded-3xl" alt="logo" src="\images\logoLovrinz.png" />
                        <span className="mx-2 text-2xl font-semibold text-white">Lovrinz Pages</span>
                    </div>
                </a>

                <nav className="mt-10">
                    <a className="flex items-center px-6 py-2 mt-4 duration-200 border-l-4" href="/admin/dashboard">
                        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2 10C2 5.58172 5.58172 2 10 2V10H18C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10Z"
                                fill="currentColor"
                            />
                            <path
                                d="M12 2.25195C14.8113 2.97552 17.0245 5.18877 17.748 8.00004H12V2.25195Z"
                                fill="currentColor"
                            />
                        </svg>

                        <span className="mx-4">Dashboard</span>
                    </a>
                    <a className="flex items-center px-6 py-2 mt-4 duration-200 border-l-4" href="/admin/form">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                            <path
                                fillRule="evenodd"
                                d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                clipRule="evenodd"
                            />
                        </svg>

                        <span className="mx-4">Forms</span>
                    </a>
                </nav>
            </div>
        </div>
    )
}
