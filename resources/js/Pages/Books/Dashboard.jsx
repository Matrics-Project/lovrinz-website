import Layout from '@/Components/Layout'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const confirmDelete = () => {
    MySwal.fire({
        title: 'Are you sure?',
        text: 'Do you really want to delete this data?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Delete',
        cancelButtonText: 'Cancel',
    }).then(result => {
        if (result.isConfirmed) {
            MySwal.fire({
                title: 'Deleted!',
                text: 'Your data has been deleted.',
                icon: 'success',
            })
            // Add your deletion logic here
        }
    })
}

export default function Dashboard({books}) {
    return (
        <Layout>
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-[#F7F9F2]">
                <div className="container mx-auto px-6 py-8">
                    <div>
                        <h3 className="text-3xl font-medium text-gray-700">Dashboard</h3>
                        <div className="mt-8"></div>

                        <div className="flex flex-col mt-8">
                            <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                                <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
                                    <table className="min-w-full">
                                        <thead>
                                            <tr>
                                                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                                    Title Book
                                                </th>
                                                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                                    Category
                                                </th>
                                                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                                    Author
                                                </th>
                                                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                                    Pages
                                                </th>
                                                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                                    Stock
                                                </th>
                                                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody className="bg-white">
                                            {books.map(book =>
                                                <tr key={book.id}>
                                                    <td className="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <div className="ml-4">
                                                                <div className="text-sm leading-5 text-gray-500">{book.title}</div>
                                                            </div>
                                                        </div>
                                                    </td>

                                                    <td className="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                                                        <div className="text-sm leading-5 text-gray-500">{book.category}</div>
                                                    </td>
                                                    <td className="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                                                        <div className="text-sm leading-5 text-gray-500">{book.author}</div>
                                                    </td>
                                                    <td className="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap">
                                                        {book.page_count}
                                                    </td>
                                                    <td className="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                                                        <div className="text-sm leading-5 text-gray-500">{book.price}</div>
                                                    </td>
                                                    <td className="flex gap-8 px-6 py-4 text-sm font-medium leading-5 text-right whitespace-nowrap">
                                                        <a href="/admin/FormEdit" className="text-indigo-600 hover:text-indigo-900">
                                                            Edit
                                                        </a>
                                                        <button onClick={confirmDelete} className="text-red-600 hover:text-red-900">
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    )
}
