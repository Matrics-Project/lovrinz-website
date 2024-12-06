<?php

use Illuminate\Support\Facades\Route;
Route::inertia('/', 'Home');

Route::inertia('/admin/dashboard', 'Dashboard');
Route::inertia('/admin/login', 'Login');
Route::inertia('/admin/form', 'Form');
Route::inertia('/admin/FormEdit', 'FormEdit');

Route::inertia('/guest/test', 'Test');

Route::inertia('/guest/home', 'Home');