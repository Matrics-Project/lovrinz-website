<?php

use App\Http\Controllers\BooksController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Laravel root pages
/*Route::get('/', function () {*/
/*    return Inertia::render('Welcome', [*/
/*        'canLogin' => Route::has('login'),*/
/*        'canRegister' => Route::has('register'),*/
/*        'laravelVersion' => Application::VERSION,*/
/*        'phpVersion' => PHP_VERSION,*/
/*    ]);*/
/*});*/

Route::resource('/books', BooksController::class)->middleware(['auth']);

Route::get('/test', function () {
});

/* **************************
** Frontend
** ************************** */

Route::inertia('/', 'Home');

// Guest Routes
Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/guest/productlist', function () {
    return Inertia::render('Productlist');
})->name('product.list');

// Route::get('/detailproduct/{id}', function ($id) {
//     return Inertia::render('DetailProduct', ['id' => $id]);
// })->name('product.detail');

Route::get('/detailproduct', function () {
    return Inertia::render('DetailProduct');
})->name('product.detail');

// Admin Routes
Route::get('/admin/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('admin.dashboard');

Route::get('/admin/login', function () {
    return Inertia::render('Login');
})->name('admin.login');

Route::get('/admin/form', function () {
    return Inertia::render('Form');
})->name('admin.form');

Route::get('/admin/FormEdit', function () {
    return Inertia::render('FormEdit');
})->name('admin.formedit');

// Additional Testing Routes (if needed)
Route::get('/guest/test', function () {
    return Inertia::render('Test');
})->name('guest.test');

/* **************************
** endFrontend
** ************************** */

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
