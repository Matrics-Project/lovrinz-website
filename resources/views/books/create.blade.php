@extends('layouts.zen')

@section('content')
    <main class="bg-gray-50 min-h-[100vh] flex justify-center items-center">
        <div class="md:w-2/3 p-7 bg-gray-100 my-12 shadow-lg rounded-md">
            <form action="{{ route('books.store') }}" method="post" class="w-full" accept-charset="utf-8">

                @if ($errors->any())
                    @foreach ($errors->all() as $error)
                        <div class="px-5 py-3 text-sm text-red-500 bg-red-200 border-2 rounded-lg mb-4 border-red-400">
                            {{ $error }}
                        </div>
                    @endforeach
                @endif

                @csrf
                <label for="Title" class="block text-xs font-medium text-gray-700"> Title </label>
                <input type="text" id="Title" placeholder="New Journey" name="title" value="{{ old('title') }}"
                    class="w-full mt-1 mb-2 border-gray-200 rounded-md shadow-sm sm:text-sm" required />

                <label for="Author" class="block text-xs font-medium text-gray-700"> Author </label>
                <input type="text" id="Author" placeholder="Author" name="author" value="{{ old('author') }}"
                    class="w-full mt-1 mb-2 border-gray-200 rounded-md shadow-sm sm:text-sm" required />

                <label for="Publisher" class="block text-xs font-medium text-gray-700"> Publisher </label>
                <input type="text" id="Publisher" placeholder="Lovrinz" name="publisher" value="{{ old('publisher') }}"
                    class="w-full mt-1 mb-2 border-gray-200 rounded-md shadow-sm sm:text-sm" />

                <label for="PublicationYear" class="block text-xs font-medium text-gray-700"> Publication Year </label>
                <input type="text" id="PublicationYear" placeholder="20xx" name="publication_year"
                    value="{{ old('publication_year') }}" class="w-full mt-1 mb-2 border-gray-200 rounded-md shadow-sm sm:text-sm"
                    required />

                <label for="Category" class="block text-xs font-medium text-gray-700">Category</label>
                <input type="text" id="Category" placeholder="Category" name="category" value="{{ old('category') }}"
                    class="w-full mt-1 mb-2 border-gray-200 rounded-md shadow-sm sm:text-sm" required />

                <label for="PageCount" class="block text-xs font-medium text-gray-700">Page Count</label>
                <input type="text" id="PageCount" placeholder="Page Count" name="page_count" value="{{ old('page_count') }}"
                    class="w-full mt-1 mb-2 border-gray-200 rounded-md shadow-sm sm:text-sm" required />

                <label for="Description" class="block text-xs font-medium text-gray-700">Description</label>
                <textarea name="description" id="Description" placeholder="Description"
                    class="w-full mt-1 mb-2 border-gray-200 rounded-md shadow-sm sm:text-sm" required>{{ old('description') }}</textarea>

                <label for="Price" class="block text-xs font-medium text-gray-700">Price</label>
                <input type="text" id="Price" placeholder="Price" name="price" value="{{ old('price') }}"
                    class="w-full mt-1 mb-2 border-gray-200 rounded-md shadow-sm sm:text-sm" required />

                <label for="img" class="block text-xs font-medium text-gray-700">Image Url</label>
                <textarea name="img" id="img" placeholder="Image Url" value=""
                    class="w-full mt-1 mb-2 border-gray-200 rounded-md shadow-sm sm:text-sm" required>{{ old('img') }}</textarea>

                <input type="submit"
                    class="self-center px-4 py-2 text-white bg-green-400 rounded-lg cursor-pointer hover:bg-green-500"name="submit"
                    value="Tambah" id="submit" />
            </form>
        </div>
    </main>
@endsection
