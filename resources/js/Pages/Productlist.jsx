import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
// import routes from '../route';

function ProductList() {
    const products = [
        { id: 1, title: 'Dilan 1990', author: 'Pidi Baiq' },
        { id: 2, title: 'Dilan 1990', author: 'Pidi Baiq' },
        { id: 3, title: 'Dilan 1990', author: 'Pidi Baiq' },
        { id: 4, title: 'Dilan 1990', author: 'Pidi Baiq' },
    ];
    
    const handleGenreChange = (selectedGenre) => {
// Logika untuk memfilter buku berdasarkan genre yang dipilih
console.log("Selected genre:", selectedGenre);
// Lakukan filter pada daftar buku Anda
};
    return (
        <>
             <Navbar/>
        <div className="bg-blue-50 min-h-screen">
                    {/* Filter Section */}
        <div className="container mx-auto py-6 px-4">
            <label htmlFor="genre" className="text-gray-700 mr-2">Filter by genre:</label>
            <select 
                id="genre" 
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded shadow hover:bg-gray-300"
                onChange={(e) => handleGenreChange(e.target.value)}
            >
                <option value="">Genre</option>
                <option value="fiction">Fiction</option>
                <option value="non-fiction">Non-fiction</option>
                <option value="fantasy">Fantasy</option>
                <option value="mystery">Mystery</option>
                <option value="romance">Romance</option>
                {/* Tambahkan lebih banyak genre sesuai kebutuhan */}
            </select>
        </div>



            {/* Product Cards */}
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white shadow rounded overflow-hidden border border-gray-200"
                    >
                        <div className="p-4">
                            <div className="bg-gray-300 h-40 mb-4 rounded"></div>
                            <h3 className="text-lg font-semibold">{product.title}</h3>
                            <p className="text-gray-600">{product.price}</p>
                            <p className="text-gray-500 text-sm">by {product.author}</p>
                        </div>
                        <div className="flex justify-between items-center px-4 py-2 bg-gray-100">
                            <a
                                href='/detailproduct'
                                className="px-4 py-2 bg-yellow-200 text-yellow-800 rounded hover:bg-yellow-300"
                            >
                                Detail
                            </a>
                            <a
                                href="https://wa.me/628972999777"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                            >
                                <i className="fab fa-whatsapp"></i>
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="container mx-auto py-6 px-4 flex justify-between items-center">
                <button className="text-gray-500 hover:text-gray-700">&larr; Previous</button>
                <div className="flex space-x-2">
                    <button className="px-3 py-1 bg-gray-300 text-gray-800 rounded">1</button>
                    <button className="px-3 py-1 text-gray-500 hover:text-gray-700">2</button>
                    <span className="px-3 py-1 text-gray-500">...</span>
                    <button className="px-3 py-1 text-gray-500 hover:text-gray-700">68</button>
                </div>
                <button className="text-gray-500 hover:text-gray-700">Next &rarr;</button>
            </div>
        </div>
        <Footer/>
        </>
    );
       
}

export default ProductList;
