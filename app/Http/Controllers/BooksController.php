<?php

namespace App\Http\Controllers;

use App\Models\Books;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Symfony\Component\Console\Input\Input;

class BooksController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $books = Books::all();
        return Inertia::render("Books/Dashboard", [
            'books' => $books
        ]);
        /*return view('books.index', compact('books'));*/
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("Books/CreateForm");
        /*return view('books.create');*/
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => "required",
            'author' => "required",
            'publication_year' => "required|numeric",
            'category' => "required",
            'page_count' => "required|numeric",
            'description' => "required",
            'price' => "required|numeric",
            'img' => "required|mimes:jpeg,png,jpg,gif,avif",
            /*'url' => "required",*/
        ]);

        $image = $request->file('img');
        $imagename = time() . "_" . $image->getClientOriginalName();

        $image->storeAs('public/images/books', $imagename);

        $bookArr = [
            'title' => $request->title,
            'author' => $request->author,
            'publisher' => $request->publisher,
            'publication_year' => $request->publication_year,
            'category' => $request->category,
            'page_count' => $request->page_count,
            'description' => $request->description,
            'price' => $request->price,
            'img' => $imagename,
            'url' => url('images/books/').$imagename,
        ];

        $book = Books::create(array_filter($bookArr, 'strlen'));
        return redirect()->route('books.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $book = Books::findOrFail($id);
        return Inertia::render("Books/EditForm", compact('book'));
        /*return view("books.edit", compact('book'));*/
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'title' => "required",
            'author' => "required",
            'publication_year' => "required|numeric",
            'category' => "required",
            'page_count' => "required|numeric",
            'description' => "required",
            'price' => "required|numeric",
            'img' => "mimes:jpeg,png,jpg,gif,avif",
            /*'url' => "required",*/
        ]);
        $book = Books::findOrFail($id);

        if ($request->hasFile('img')){
            $image = $request->file('img');
            $imagename = time() . "_" . $image->getClientOriginalName();
            $image->storeAs('public/images/books', $imagename);

            if (Storage::disk("public")->exists("images/books/".$book->img)){
                Storage::disk("public")->delete("images/books/".$book->img);
            }

            $book->img = $imagename;
        }

        $book->title = $request->title;
        $book->author = $request->author;
        $book->publication_year = $request->publication_year;
        $book->category = $request->category;
        $book->page_count = $request->page_count;
        $book->description = $request->description;
        $book->price = $request->price;

        $book->save();
        return redirect(route('books.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $book = Books::findOrFail($id);
        if (Storage::disk("public")->exists("images/books/".$book->img)){
            Storage::disk("public")->delete("images/books/".$book->img);
        }
        $book->delete();
        return redirect(route('books.index'));
    }
}
