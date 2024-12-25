import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const DetailProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const productData = [
        {
            id: 1,
            name: "Dilan 1990",
            description: "Dilan 1990 menceritakan percintaan anak SMA yang cukup unik.",
            price: 50000,
            genre: "Romance",
            stock: 10,
        },
        {
            id: 2,
            name: "Majnun",
            description: "Majnun adalah kisah tentang cinta dan persahabatan.",
            price: 75000,
            genre: "Fiction",
            stock: 5,
        },
    ];

    // Temukan produk berdasarkan ID
    const product = productData.find((item) => item.id === parseInt(id));

    // Jika produk tidak ditemukan
    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl font-bold">Produk tidak ditemukan</h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Navbar */}
            <nav className="bg-white shadow">
                <div className="container mx-auto px-4 py-4">
                    <a href="/" className="text-lg font-bold">LOVRINZ</a>
                </div>
            </nav>

            {/* Content */}
            <div className="container mx-auto py-12 px-6">
                <div className="bg-white p-8 rounded shadow">
                    <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                    <p className="text-gray-700 mb-4">{product.description}</p>
                    <p className="text-gray-500 mb-2">Harga: Rp{product.price.toLocaleString()}</p>
                    <p className="text-gray-500 mb-2">Genre: {product.genre}</p>
                    <p className="text-gray-500 mb-4">Stok: {product.stock}</p>

                    <button
                        onClick={() => navigate(-1)} // Navigasi kembali
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                    >
                        Kembali
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DetailProduct;
