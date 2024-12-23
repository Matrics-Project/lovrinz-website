<?php

use App\Http\Controllers\BooksController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::resource('/books', BooksController::class)->middleware(['auth']);

Route::get('/test', function () {
});

Route::inertia('/', 'Home');

// Frontend
Route::inertia('/admin/dashboard', 'Dashboard');
Route::inertia('/admin/login', 'Login');
Route::inertia('/admin/form', 'Form');
Route::inertia('/admin/FormEdit', 'FormEdit');

Route::inertia('/guest/test', 'Test');

Route::inertia('/guest/home', 'Home');
// endFrontend

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
