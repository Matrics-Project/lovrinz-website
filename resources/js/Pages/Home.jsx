import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-pink-200 to-teal-200">
            <Navbar />

            {/* Hero Section */}
            <div className="text-center my-12">
                <h1 className="text-4xl font-bold text-gray-800">LOVRINZ PAGES WEBSITE</h1>
                <p className="p-5 text-gray-700">
                    <span className="font-bold">Penerbitan & Self Publish</span>
                    <br /> Penerbit LovRinz Telah Menerbitkan Ribuan Judul Buku Best Seller
                </p>
            </div>

            {/* Introduction */}
            <div className="bg-white p-8 mx-4 md:mx-24 rounded shadow-md">
                <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                <p>
                    Lovrinz hadir sejak 2014 sebagai penerbit yang membantu para penulis mewujudkan karyanya dalam genggaman dan sudah banyak menerbitkan buku-buku penulis Indonesia.
                </p>
            </div>

            {/* Preview New Book */}
            <div className="bg-white p-8 mx-4 md:mx-24 mt-8 rounded shadow-md">
                <h2 className="text-2xl font-bold mb-4">Preview New Book</h2>

                <div className="space-y-6">
                    <div className="p-4 border rounded-md">
                        <div>
                            <img src="\images\logoLovrinz.png"  alt="ajg" />
                            <h3 className="font-bold">Dilan 1990</h3>
                            <p>
                                Dilan 1990 menceritakan percintaan anak SMA yang cukup unik. Novel
                                dengan tebal 348 halaman ini diterbitkan pada tahun 2014. Ada beberapa
                                penerbit yang telah menerbitkan novel Dilan 1990, yakni penerbit
                                Pastel Books pada 2014 dan penerbit Mizan Pustaka pada 2015.
                            </p>
                        </div>
                        <button className="btn btn-success">Detail</button>
                    </div>

                    <div className="p-4 border rounded-md">
                        <div>
                            <h3 className="font-bold">Majnun – Anton Kurnia</h3>
                            <p>
                                Majnun adalah kisah tentang cinta dan persahabatan, sekaligus semacam
                                catatan kaki atas sejarah yang dilupakan. Selain itu, pembelaan atas
                                kebebasan dan gugatan terhadap ketidakadilan adalah pokok novel ini.
                            </p>
                        </div>
                        <button className="btn btn-success">Detail</button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Home;
