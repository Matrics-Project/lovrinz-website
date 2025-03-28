import React from 'react';
import { Link } from '@inertiajs/react';
import routes from '../route';

function Navbar() {
    return (
        <nav className="bg-gradient-to-r from-pink-200 to-teal-200 py-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center px-6">
                {/* Logo */}
                <div className="flex items-center">
                    <img src="\images\logoLovrinz.png" alt="Logo" className="w-20 h-20" />
                    <span className="text-xl font-bold text-gray-800">Penerbit Lovrinz</span>
                </div>

                {/* Navigation Links */}
                <div className="flex space-x-6">
                    <Link 
                        href={routes.home} 
                        className="text-gray-800 text-xl hover:text-teal-500 font-bold"
                    >
                        Home
                    </Link>
                    <Link 
                        href={routes.productList} 
                        className="text-gray-800 text-xl hover:text-teal-500 font-bold"
                    >
                        Product List
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
