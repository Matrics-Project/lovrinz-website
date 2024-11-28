import { Link } from '@inertiajs/react'

import BooksLayout from '@/Layouts/BooksLayout'

export default function Index({ books }) {
    return (
        <BooksLayout>
            <div className="container mx-auto">
                <div className="p-4">
                    <div className="flex items-center justify-between pb-2 mb-1">
                        <h1 className="text-4xl font-bold text-gray-800 uppercase">Books List</h1>
                        <Link
                            href={route('books.create')}
                            className="px-4 py-2 text-white bg-green-400 rounded-lg hover:bg-green-500 me-2"
                        >
                            Tambah +
                        </Link>
                    </div>
                    <hr />
                </div>
                <div className="p-4">
                    <table className="w-full bg-white rounded-lg">
                        <thead>
                            <tr className="text-left bg-gray-100 border-b-2 border-gray-200 rounded-lg">
                                <th className="p-3 text-lg font-bold tracking-wide text-center">No</th>
                                <th className="p-3 text-lg font-bold tracking-wide">Title</th>
                                <th className="p-3 text-lg font-bold tracking-wide">Author</th>
                                <th className="p-3 text-lg font-bold tracking-wide">Publisher</th>
                                <th className="p-3 text-lg font-bold tracking-wide">Publish Year</th>
                                <th className="p-3 text-lg font-bold tracking-wide">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y-2 divide-gray-100">
                            {books.map((book, index) => (
                                <tr key={index}>
                                    <td className="p-3 text-base text-center tracking-thin">{index + 1}</td>
                                    <td className="p-3 text-base tracking-thin">{book.title}</td>
                                    <td className="p-3 text-base tracking-thin">{book.author}</td>
                                    <td className="p-3 text-base tracking-thin">{book.publisher}</td>
                                    <td className="p-3 text-base tracking-thin">{book.publication_year}</td>
                                    <td className="p-3 text-base tracking-thin">
                                        <Link className="px-4 py-2 text-white bg-blue-400 rounded-lg hover:bg-blue-500 me-2">
                                            Edit
                                        </Link>
                                        <Link
                                            className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
                                            method="delete"
                                            href={route('books.destroy', book.id)}
                                        >
                                            Hapus
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </BooksLayout>
    )
}
