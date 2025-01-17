import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

function DetailProduct({ book }) {
    const imagesUrl = window.location.origin + '/storage/images/books/'

    return (
        <>
        <Navbar/>
        <div className="bg-blue-50 min-h-screen">
            <div className="container mx-auto py-6 px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Image Section */}
                <div className="flex justify-center items-center">
                    <img src={imagesUrl + book.img} alt='rawr' className="bg-gray-300 w-fit h-96 rounded"/>
                </div>

                {/* Details Section */}
                <div>
                    <h1 className="text-3xl font-bold">{book.title} ({book.publication_year})</h1>
                    <span className="inline-block bg-green-200 text-green-800 text-sm px-3 py-1 rounded mt-2">
                        {book.category}
                    </span>
                    <p className="text-gray-600 mt-4">by {book.author}</p>
                    <p className="text-gray-600">Stock: {book.price}</p>
                    <p className="text-gray-600">Pages: {book.page_count}</p>

                    {/* WhatsApp Button */}
                    <div className="mt-6">
                        <a
                            href="https://wa.me/628972999777"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-center bg-green-500 text-white font-semibold py-3 rounded shadow hover:bg-green-600"
                            >
                            <i className="fab fa-whatsapp"></i> Contact via WhatsApp
                        </a>
                    </div>

                    {/* Description Section */}
                    <div className="mt-6">
                        <h2 className="text-lg font-bold">Description</h2>
                        <p className="text-gray-700 mt-2">{book.description}</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
                            </>
    );
}

export default DetailProduct;
