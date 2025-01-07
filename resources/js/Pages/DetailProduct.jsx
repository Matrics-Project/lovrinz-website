import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

function DetailProduct() {
    const product = {
        title: 'Dilan 1990',
        genre: 'Romance',
        author: 'Pidi Baiq',
        stock: 190,
        pages: 360,
        description: `"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explic. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"`,
    };

    return (
        <>
        <Navbar/>
        <div className="bg-blue-50 min-h-screen">
            <div className="container mx-auto py-6 px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Image Section */}
                <div className="flex justify-center items-center">
                    <img src='/images/dilan-1990.png' alt='rawr' className="bg-gray-300 w-fit h-96 rounded"/>
                </div>

                {/* Details Section */}
                <div>
                    <h1 className="text-3xl font-bold">{product.title}</h1>
                    <span className="inline-block bg-green-200 text-green-800 text-sm px-3 py-1 rounded mt-2">
                        {product.genre}
                    </span>
                    <p className="text-gray-600 mt-4">by {product.author}</p>
                    <p className="text-gray-600">Stock: {product.stock}</p>
                    <p className="text-gray-600">Pages: {product.pages}</p>

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
                        <p className="text-gray-700 mt-2">{product.description}</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
                            </>
    );
}

export default DetailProduct;
