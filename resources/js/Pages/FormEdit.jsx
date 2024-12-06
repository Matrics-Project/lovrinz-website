import React, { useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import Layout from '../components/Layout'
function App() {
    const [Book, setBook] = useState({
        title: '',
        description: '',
        category: '',
        author: '',
        pages: '',
        stock: '',
        image: '',
    })

    const MySwal = withReactContent(Swal)
    const callAlert = () => {
        MySwal.fire({
            title: 'success!',
            text: 'Data telah di Edit!',
            icon: 'success',
        })
    }

    const handleInputChange = e => {
        const { name, value } = e.target
        setBook(prevBook => ({
            ...prevBook,
            [name]: value,
        }))
    }

    const book = e => {
        e.preventDefault()
        console.log('EditBook: ', JSON.parse(JSON.stringify(Book)))
    }

    return (
        <Layout>
            <div className="bg-[#F7F9F2] overflow-auto py-8 ">
                <h3 className="text-3xl font-semibold text-gray-700 flex justify-center mt-4">Form Edit Book</h3>
                <div className="mt-8">
                    <div className="mt-4">
                        <div className="p-6 bg-white rounded-md shadow-md mx-40">
                            <h2 className="text-lg font-semibold text-gray-700 capitalize">Edit List Book</h2>

                            <form onSubmit={book}>
                                <div className="grid grid-cols-1 gap-6 mt-4">
                                    <div className="flex flex-col w-[50%]">
                                        <label className="text-gray-700" htmlFor="title">
                                            Title Book
                                        </label>
                                        <input
                                            className="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                                            type="text"
                                            name="title"
                                            placeholder="Write a Title of The Book"
                                            value={Book.title}
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div className="flex flex-col w-[50%]">
                                        <label className="text-gray-700" htmlFor="description">
                                            Description
                                        </label>
                                        <textarea
                                            className="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                                            name="description"
                                            value={Book.description}
                                            onChange={handleInputChange}
                                            rows="4"
                                            placeholder="Write a Description of The Book"
                                        />
                                    </div>

                                    <div className="flex flex-col w-[15%]">
                                        <label className="text-gray-700" htmlFor="category">
                                            Category
                                        </label>
                                        <select
                                            className="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-50"
                                            name="category"
                                            value={Book.category}
                                            onChange={handleInputChange}
                                        >
                                            <option value="">Select a Category</option>
                                            <option value="fiction">Fiction</option>
                                            <option value="non-fiction">Non-Fiction</option>
                                            <option value="science">Science</option>
                                            <option value="history">History</option>
                                            <option value="fantasy">Fantasy</option>
                                        </select>
                                    </div>

                                    <div className="flex flex-col w-[50%]">
                                        <label className="text-gray-700" htmlFor="author">
                                            Author
                                        </label>
                                        <input
                                            className="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                                            type="text"
                                            name="author"
                                            placeholder="Write a Name of The Author"
                                            value={Book.author}
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div className="flex flex-col w-[50%]">
                                        <label className="text-gray-700" htmlFor="pages">
                                            Pages
                                        </label>
                                        <input
                                            className="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                                            type="number"
                                            name="pages"
                                            placeholder="Input the Number of Page's"
                                            value={Book.pages}
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div className="flex flex-col w-[50%]">
                                        <label className="text-gray-700" htmlFor="stock">
                                            Stock
                                        </label>
                                        <input
                                            className="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                                            type="number"
                                            name="stock"
                                            placeholder="Input the Number of Stock"
                                            value={Book.stock}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="flex flex-col w-[50%]">
                                        <label className="text-gray-700" htmlFor="image">
                                            Image
                                        </label>
                                        <input
                                            className="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                                            type="file"
                                            accept=".jpg,.png,.jpeg"
                                            name="image"
                                            placeholder="pick the image of the book"
                                            value={Book.image}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>

                                <div className="flex justify-end mt-4">
                                    <button
                                        className="px-4 py-2 text-gray-200 bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                                        onClick={callAlert}
                                    >
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default App
