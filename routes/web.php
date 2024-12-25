<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Guest Routes
Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/guest/productlist', function () {
    return Inertia::render('Productlist');
})->name('product.list');

Route::get('/guest/detailproduct/{id}', function ($id) {
    return Inertia::render('DetailProduct', ['id' => $id]);
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

Route::get('/admin/formedit', function () {
    return Inertia::render('FormEdit');
})->name('admin.formedit');

// Additional Testing Routes (if needed)
Route::get('/guest/test', function () {
    return Inertia::render('Test');
})->name('guest.test');
