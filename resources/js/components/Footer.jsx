import React from 'react';

function Footer() {
    return (
        <footer className="bg-gradient-to-r from-teal-200 to-pink-200 py-6 shadow-md">
            <div className="container mx-auto flex justify-between items-center px-6">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <img src="\images\logoLovrinz2.png" alt="Footer Logo" className="flex  h-20" />
                </div>

                {/* Contact Info */}
                <div className="flex space-x-10">
                    <p className="text-gray-800">08.00 - 17.00 WIB</p>
                    <p className="text-gray-800">lovrinzpublishing@gmail.com</p>
                    <p className="text-gray-800">+628972999777</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
