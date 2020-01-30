<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
    //return $request->user();
//});

Route::resource('kamarruangan', "API\KamarRuanganController")->only([
    'index', 'show'	
]);

Route::get('availablerooms', 'API\KamarRuanganController@getAvailableRooms');
Route::get('availableicurooms', 'API\KamarRuanganController@getAvailableICURooms');

Route::post('register', 'API\AppUserController@register');
Route::post('login', 'API\AppUserController@login');
Route::post('authenticated', 'API\AppUserController@authenticated');
Route::post('checkvalidemail', 'API\AppUserController@checkValidEmail');

Route::group(['middleware' => ['apiauth']], function (){
    Route::post('pesankamar', 'API\PesanKamarController@store');
    Route::post('rmpasien', 'API\PesanKamarController@rekammedis');
	Route::post('ruangan', 'API\PesanKamarController@listruangan');
	Route::post('kamarruangan', 'API\PesanKamarController@listkamar');
	Route::post('kamarpelayanan', 'API\PesanKamarController@listkelasruangan');
	Route::post('pesankamarsubmit', 'API\PesanKamarController@store');
	Route::get('nomorbooking', 'API\PesanKamarController@nomorbooking');
	Route::post('reloadToken', 'API\AppUserController@reloadtoken');
	Route::post('removecookies', 'API\AppUserController@removecookies');
});

Route::get('show', 'API\PasienController@show');
