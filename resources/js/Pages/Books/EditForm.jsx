import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { router, usePage } from '@inertiajs/react'
import withReactContent from 'sweetalert2-react-content'
import InputError from '@/Components/InputError'

import Layout from '@/Components/Layout'
function App({ book: b }) {
    const [Book, setBook] = useState({
        title: b.title,
        description: b.description,
        category: b.category,
        publication_year: b.publication_year,
        author: b.author,
        pages: b.page_count,
        price: b.price,
        image: '',
    })

    const { errors } = usePage().props;

    const imagesUrl = window.location.origin + '/storage/images/books/'

    const MySwal = withReactContent(Swal)
    const callAlert = () => {
        MySwal.fire({
            title: 'success!',
            text: 'Data telah di Edit!',
            icon: 'success',
        })
    }

    const handleInputChange = e => {
        const { name, value, files } = e.target
        setBook(prevBook => ({
            ...prevBook,
            [name]: files ? files[0] : value,
        }))
        if (files) {
            updateImage(getImgUrl(files[0]), 'bookImg')
        }
    }

    const getImgUrl = files => {
        if (typeof files == 'object') {
            const url = URL.createObjectURL(files)
            return url
        } else {
            return 'nothing'
        }
    }

    const updateImage = (url, idImg) => {
        const img = document.getElementById(idImg)
        img.src = url
    }

    const updateBook = e => {
        e.preventDefault()
        console.log(Book)

        const bookForm = new FormData()
        bookForm.append('title', Book.title)
        bookForm.append('author', Book.author)
        bookForm.append('publication_year', Book.publication_year)
        bookForm.append('category', Book.category)
        bookForm.append('page_count', Book.pages)
        bookForm.append('description', Book.description)
        bookForm.append('price', Book.price)
        if (typeof Book.image == 'object') {
            bookForm.append('img', Book.image)
        }
        bookForm.append('_method', 'PUT')

        console.log(bookForm)

        router.post(route('books.update', b.id), bookForm)

        callAlert()
    }

    return (
        <Layout>
            <div className="bg-[#F7F9F2] overflow-auto py-8 ">
                <h3 className="text-3xl font-semibold text-gray-700 flex justify-center mt-4">Form Edit Book</h3>
                <div className="mt-8">
                    <div className="mt-4 mx-auto max-w-[1124px]">
                        <div className="p-6 bg-white rounded-md shadow-md md:mx-32 mx-5">
                            <h2 className="text-lg font-semibold text-gray-700 capitalize">Edit List Book</h2>

                            <form onSubmit={updateBook} encType="multipart/form-data">
                                <div className="grid grid-cols-1 gap-6 mt-4">
                                    <div className="flex flex-col w-[100%]">
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
                                        <InputError message={errors.title} />
                                    </div>

                                    <div className="flex flex-col w-[100%]">
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
                                        <InputError message={errors.description} />
                                    </div>

                                    <div className="flex flex-col w-max">
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
                                        <InputError message={errors.category} />
                                    </div>

                                    <div className="flex flex-col w-[100%]">
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
                                        <InputError message={errors.author} />
                                    </div>

                                    <div className="flex flex-col w-[100%]">
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
                                        <InputError message={errors.page_count} />
                                    </div>

                                    <div className="flex flex-col w-[100%]">
                                        <label className="text-gray-700" htmlFor="price">
                                            Price
                                        </label>
                                        <input
                                            className="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                                            type="number"
                                            name="price"
                                            placeholder="Input the Number of Price"
                                            value={Book.price}
                                            onChange={handleInputChange}
                                        />
                                        <InputError message={errors.price} />
                                    </div>
                                    <div className="flex">
                                        <div className="flex flex-col w-[100%]">
                                            <label className="text-gray-700" htmlFor="image">
                                                Image
                                            </label>
                                            <input
                                                className="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                                                type="file"
                                                accept=".jpg,.png,.jpeg"
                                                name="image"
                                                placeholder="pick the image of the book"
                                                onChange={handleInputChange}
                                            />
                                            <InputError message={errors.img} />
                                        </div>
                                        <img src={imagesUrl + b.img} id="bookImg" className="w-1/2" alt=" " />
                                    </div>
                                </div>

                                <div className="flex justify-end mt-4">
                                    <button
                                        type='submit'
                                        className="px-4 py-2 text-gray-200 bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
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
