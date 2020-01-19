<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/*Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::post('/register_user', 'API\AppUserController@register')->name('register_user');*/

// Auth::routes();

/*Route::get('/home', 'HomeController@index')->name('home');
Route::get('/pesankamar', 'API\PesanKamarController@index')->name('pesankamar');*/

Route::get('/{any}', 'SpaController@index')->where('any', '.*');
