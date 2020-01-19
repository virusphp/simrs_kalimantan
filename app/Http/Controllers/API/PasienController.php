<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Instalasi;

class PasienController extends Controller
{
    //
    // Pasien Registrasi sendiri untuk rawat Inap
    // TODO:
    // * pasien mendaftar rawat inap
    // * pasien mendapatkan no rekam medis yang nantinya dapat digunakan
    // untuk memesan kamar
    public function register(Request $request, $login = false)
    {
		$validator = Validator::make($request->all(), [
			'nama_lengkap'  => 'required',
			'agama'	    => 'required',
			'tanggal_lahir' => 'required',
			'penjamin_id'   => 'required',
			'shift_id'      => -1,
			'pasien_id'     => '',
		]);

		$instalasi_rawat_inap = Instalasi::where('instalasi_nama', 'Rawat Inap');

		$request->merge(['instalasi_id' => $instalasi_rawat_inap]);
    }

    public function show()
    {
	return \Response::json(\App\Pendaftaran::first());
    }	
}
