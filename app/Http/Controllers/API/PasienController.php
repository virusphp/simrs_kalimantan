<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Instalasi;

class PasienController extends Controller
{
    public function show()
    {
	return \Response::json(\App\Pendaftaran::first());
    }	
}
