import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-pink-200 to-teal-200">
            <Navbar />

            {/* Hero Section */}
            <div className="text-center my-20">
                <h1 className="text-4xl font-bold text-gray-800">LOVRINZ PAGES WEBSITE</h1>
                <p className="p-5 text-gray-700">
                    <span className="font-bold">Penerbitan & Self Publish</span>
                    <br /> Penerbit LovRinz Telah Menerbitkan Ribuan Judul Buku Best Seller
                </p>
            </div>
            
            {/* Introduction */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#eff6ff" fill-opacity="1" d="M0,160L20,138.7C40,117,80,75,120,64C160,53,200,75,240,122.7C280,171,320,245,360,277.3C400,309,440,299,480,282.7C520,267,560,245,600,208C640,171,680,117,720,133.3C760,149,800,235,840,234.7C880,235,920,149,960,144C1000,139,1040,213,1080,224C1120,235,1160,181,1200,149.3C1240,117,1280,107,1320,112C1360,117,1400,139,1420,149.3L1440,160L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path></svg>
            <div className="flex md:flex-col bg-blue-50">

            <div className=" p-8 px-16 flex md:flex-row flex-column justify-between items-center">
                <div className="w-full">
                    <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                    <p className="text-lg">
                        Lovrinz hadir sejak 2014 sebagai penerbit yang membantu para penulis mewujudkan karyanya dalam genggaman dan sudah banyak menerbitkan buku-buku penulis Indonesia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quia est corrupti vel accusamus nemo! Odit repudiandae error nam officiis quod rem amet et eligendi illum assumenda aperiam quos ea porro dicta sint consequatur saepe reprehenderit, molestias, non perferendis unde! Dolores deserunt, dignissimos tempora modi at exercitationem error optio? Distinctio.
                    </p>
                </div>
                <div className="w-full flex justify-center">
                    <img className='w-[20vw] rounded-full' src="/images/LOVRINZ3.png"/>
                </div>
            </div>


            {/* Preview New Book */}
            <div className="bg-blue-50 p-8 px-16 mt-8">
                <h2 className="text-2xl font-bold mb-4">Preview New Book</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-teal-200 shadow-md rounded-lg p-4 flex flex-col items-center">
                        <img
                            src="/images/logoLovrinz.png"
                            alt="Dilan 1990"
                            className="w-32 h-32 object-cover rounded-md mb-4"
                        />
                        <h3 className="font-bold text-lg mb-2 text-center">Dilan 1990</h3>
                        <p className="text-sm text-gray-600 text-center mb-4">
                            Dilan 1990 menceritakan percintaan anak SMA yang cukup unik. Novel dengan tebal 348 halaman ini diterbitkan pada tahun 2014. Ada beberapa penerbit yang telah menerbitkan novel Dilan 1990, yakni penerbit Pastel Books pada 2014 dan penerbit Mizan Pustaka pada 2015.
                        </p>
                        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                            <a href='/detailproduct'>Detail</a>
                        </button>
                    </div>
                    <div className="bg-teal-200 shadow-md rounded-lg p-4 flex flex-col items-center">
                        <img
                            src="/images/logoLovrinz.png"
                            alt="Majnun – Anton Kurnia"
                            className="w-32 h-32 object-cover rounded-md mb-4"
                        />
                        <h3 className="font-bold text-lg mb-2 text-center">Majnun – Anton Kurnia</h3>
                        <p className="text-sm text-gray-600 text-center mb-4">
                            Majnun adalah kisah tentang cinta dan persahabatan, sekaligus semacam catatan kaki atas sejarah yang dilupakan. Selain itu, pembelaan atas kebebasan dan gugatan terhadap ketidakadilan adalah pokok novel ini.
                        </p>
                        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                        <a href='/detailproduct'>Detail</a>
                        </button>
                    </div>
                    <div className="bg-teal-200 shadow-md rounded-lg p-4 flex flex-col items-center">
                        <img
                            src="/images/logoLovrinz.png"
                            alt="Majnun – Anton Kurnia"
                            className="w-32 h-32 object-cover rounded-md mb-4"
                        />
                        <h3 className="font-bold text-lg mb-2 text-center">Majnun – Anton Kurnia</h3>
                        <p className="text-sm text-gray-600 text-center mb-4">
                            Majnun adalah kisah tentang cinta dan persahabatan, sekaligus semacam catatan kaki atas sejarah yang dilupakan. Selain itu, pembelaan atas kebebasan dan gugatan terhadap ketidakadilan adalah pokok novel ini.
                        </p>
                        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                        <a href='/detailproduct'>Detail</a>
                        </button>
                    </div>
                    <div className="bg-teal-200 shadow-md rounded-lg p-4 flex flex-col items-center">
                        <img
                            src="/images/logoLovrinz.png"
                            alt="Majnun – Anton Kurnia"
                            className="w-32 h-32 object-cover rounded-md mb-4"
                        />
                        <h3 className="font-bold text-lg mb-2 text-center">Majnun – Anton Kurnia</h3>
                        <p className="text-sm text-gray-600 text-center mb-4">
                            Majnun adalah kisah tentang cinta dan persahabatan, sekaligus semacam catatan kaki atas sejarah yang dilupakan. Selain itu, pembelaan atas kebebasan dan gugatan terhadap ketidakadilan adalah pokok novel ini.
                        </p>
                        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                        <a href='/detailproduct'>Detail</a>
                        </button>
                    </div>
                    <div className="bg-teal-200 shadow-md rounded-lg p-4 flex flex-col items-center">
                        <img
                            src="/images/logoLovrinz.png"
                            alt="Majnun – Anton Kurnia"
                            className="w-32 h-32 object-cover rounded-md mb-4"
                        />
                        <h3 className="font-bold text-lg mb-2 text-center">Majnun – Anton Kurnia</h3>
                        <p className="text-sm text-gray-600 text-center mb-4">
                            Majnun adalah kisah tentang cinta dan persahabatan, sekaligus semacam catatan kaki atas sejarah yang dilupakan. Selain itu, pembelaan atas kebebasan dan gugatan terhadap ketidakadilan adalah pokok novel ini.
                        </p>
                        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                        <a href='/detailproduct'>Detail</a>
                        </button>
                    </div>
                    </div>
                    </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#eff6ff" fill-opacity="1" d="M0,224L20,202.7C40,181,80,139,120,112C160,85,200,75,240,85.3C280,96,320,128,360,154.7C400,181,440,203,480,208C520,213,560,203,600,186.7C640,171,680,149,720,149.3C760,149,800,171,840,181.3C880,192,920,192,960,202.7C1000,213,1040,235,1080,229.3C1120,224,1160,192,1200,154.7C1240,117,1280,75,1320,80C1360,85,1400,139,1420,165.3L1440,192L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"></path></svg>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Home;
