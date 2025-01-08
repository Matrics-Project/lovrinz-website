import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function ProductList() {
  const products = [
    { id: 1, title: 'Dilan 1990', author: 'Pidi Baiq', image: '/images/dilan-1990.png', genre: 'romance' },
    { id: 2, title: 'Majnun', author: 'Anton Kurnia', image: '/images/coverbukumajnun.png', genre: 'fiction' },
    { id: 3, title: 'The Psychology of Money', author: 'Morgan Housel', image: '/images/psychology_of_money.png', genre: 'non-fiction' },
  ];

  const [selectedGenre, setSelectedGenre] = useState(''); // State untuk menyimpan genre yang dipilih

  // Logika untuk memfilter produk berdasarkan genre
  const filteredProducts = selectedGenre
    ? products.filter((product) => product.genre === selectedGenre)
    : products;

  const handleGenreChange = (selectedGenre) => {
    setSelectedGenre(selectedGenre); // Update genre yang dipilih
  };

  return (
    <>
      <Navbar />
      <div className="bg-blue-50 min-h-screen">
        {/* Filter Section */}
        <div className="container mx-auto py-6 px-4">
          <label htmlFor="genre" className="text-gray-700 mr-2">
            Filter by genre:
          </label>
          <select
            id="genre"
            className="bg-gray-200 text-gray-700 px-5 py-2 rounded shadow hover:bg-gray-300"
            onChange={(e) => handleGenreChange(e.target.value)}
          >
            <option value="">All Genres</option>
            <option value="fiction">Fiction</option>
            <option value="non-fiction">Non-fiction</option>
            <option value="fantasy">Fantasy</option>
            <option value="mystery">Mystery</option>
            <option value="romance">Romance</option>
          </select>
        </div>

        {/* Product Cards */}
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow rounded-lg overflow-hidden border border-gray-200"
            >
              {/* Gambar Produk */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-cover"
              />
              {/* Detail Produk */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{product.title}</h3>
                <p className="text-gray-600 text-base mb-2">by {product.author}</p>
                {/* <p className="text-blue-700 italic text-sm mb-2">{product.genre}</p> */}
                <span className="inline-block bg-green-200 text-green-800 text-sm px-3 py-1 rounded mb-2">
                        {product.genre}
                    </span>
              </div>
              {/* Tombol WA dan Detail */}
              <div className="flex justify-between items-center px-4 py-3 bg-gray-100">
                <a
                  href="/detailproduct"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Detail
                </a>
                <a
                  href={`https://wa.me/628972999777`}
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
      </div>
      <Footer />
    </>
  );
}

export default ProductList;
