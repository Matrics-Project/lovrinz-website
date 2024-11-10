import { useState } from 'react'

import Header from './Header'
import Sidebar from './Sidebar'

export default function Layout({ children }) {
    const [IsOpen, setIsOpen] = useState(false)

    return (
        <div className="flex h-screen bg-gray-200 font-roboto">
            <Sidebar IsOpen={IsOpen} setIsOpen={setIsOpen} />

            <div className="flex-1 flex flex-col overflow-hidden">
                <Header IsOpen={IsOpen} setIsOpen={setIsOpen} />

                {children}
            </div>
        </div>
    )
}
