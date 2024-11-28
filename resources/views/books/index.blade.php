@extends('layouts.zen')

@section('content')
    <main class="bg-gray-50 min-h-[100vh]">
        <div class="container mx-auto">
            <div class="p-4">
                <div class="flex items-center justify-between pb-2 mb-1">
                    <h1 class="text-4xl font-bold text-gray-800 uppercase">Books List</h1>
                    <a href="{{ route('books.create') }}"
                        class="px-4 py-2 text-white bg-green-400 rounded-lg hover:bg-green-500 me-2">
                        Tambah +
                    </a>
                </div>
                <hr />
            </div>
            <div class="m-4 rounded-lg overflow-auto">
                <table class="w-full bg-white rounded-lg overflow-clip">
                    <thead class="bg-gray-100">
                        <tr class="text-left border-b-2 border-gray-200 rounded-lg">
                            <th class="p-3 text-lg font-bold tracking-wide text-center">No</th>
                            <th class="p-3 text-lg font-bold tracking-wide">Title</th>
                            <th class="p-3 text-lg font-bold tracking-wide">Author</th>
                            <th class="p-3 text-lg font-bold tracking-wide">Publisher</th>
                            <th class="p-3 text-lg font-bold tracking-wide">Publication Year</th>
                            <th class="p-3 text-lg font-bold tracking-wide">Action</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y-2 divide-gray-100">
                        @foreach ($books as $i => $book)
                            <tr>
                                <td class="p-3 text-base text-center tracking-thin">{{ $i + 1 }}</td>
                                <td class="p-3 text-base tracking-thin">{{ $book->title }}</td>
                                <td class="p-3 text-base tracking-thin">{{ $book->author }}</td>
                                <td class="p-3 text-base tracking-thin">{{ $book->publisher }}</td>
                                <td class="p-3 text-base tracking-thin">{{ $book->publication_year }}</td>
                                <td class="p-3 text-base tracking-thin">
                                    <div class="flex gap-3 justify-center">
                                        <a href="{{ route('books.edit', $book->id) }}" class="px-4 py-2 text-white bg-blue-400 rounded-lg hover:bg-blue-500">
                                            Edit
                                        </a>
                                        <form action="{{ route('books.destroy', $book->id) }}"
                                            method="post">
                                            @csrf
                                            @method('delete')
                                            <button
                                                class="px-4 py-2 inline text-white bg-red-500 rounded-lg hover:bg-red-600"
                                                type="submit">
                                                Hapus
                                            </button>
                                        </form>
                                    </div>
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>

    </main>
@endsection
