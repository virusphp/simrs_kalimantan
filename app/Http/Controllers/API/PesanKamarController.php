<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\BookingKamar;
use App\Ruangan;
use App\Pasien;
use App\Instalasi;
use App\KamarRuangan;
//use App\KelasRuangan;
use App\MapAppUserToPasien;
use App\KelasPelayanan;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class PesanKamarController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
	//
	return view('pesankamar.pesankamar');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
	//
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
	 */
	public function store(Request $request)
	{
		$validator = Validator::make($request->all(), [
			'ruangan_id' => 'required',
			'kamarruangan_id' => 'required',
			'kelaspelayanan_id' => 'required',
			'no_rekam_medik' => 'required'
		], [
			'kelaspelayanan_id' => "Pilih Kelas",
			'ruangan_id.required' => 'Pilih Ruangan',
		]);
		if ($validator->fails()) {
		   return \Response::json($validator->errors());
		} else {
			// check last booking
			$lastbookingno = BookingKamar::select('bookingkamar_no')->orderBy('bookingkamar_id', 'desc')
														   ->first();

			$bookingkamar_no = explode('BOOK', $lastbookingno->bookingkamar_no);
			$bookingkamar_no = $bookingkamar_no[1] + 1;
			$bookingkamar_no = 'BOOK' . $bookingkamar_no;
				
			$pasien_id = $this->rekammedis($request, true);

			$date = date('Y-m-d H:i:s');
			$bookingKamar = new BookingKamar;
			$bookingKamar->ruangan_id = $request->ruangan_id;
			$bookingKamar->kamarruangan_id = $request->kamarruangan_id;
			$bookingKamar->kelaspelayanan_id = $request->kelaspelayanan_id;
			$bookingKamar->bookingkamar_no = $bookingkamar_no;
			$bookingKamar->pasien_id = $pasien_id;
			$bookingKamar->pasienadmisi_id = null;
			$bookingKamar->pendaftaran_id = null;
			$bookingKamar->tgltransaksibooking = $date;
			$bookingKamar->tglbookingkamar = $date;
			$bookingKamar->statusbooking = 'ANTRI';
			$bookingKamar->create_time = $date;
			$bookingKamar->update_time = $date;
			$bookingKamar->create_loginpemakai_id = 0;
			$bookingKamar->update_loginpemakai_id = 0;
			$bookingKamar->create_ruangan = -1;
			$bookingKamar->statuskonfirmasi = 'BELUM KONFIRMASI';
			$bookingKamar->tglakhirkonfirmasi = date('Y-m-d');
	
			try {
				$bookingKamar->save();
				
				// mapping
				$doesntexists = MapAppUserToPasien::where([ 
					['app_users_id', '=', Auth::id()],
					['pasien_id', '=', $pasien_id]
				])->doesntExist();

				$dataauth = $request->decoded_jwt;
				if ($doesntexists) {
					$mapping = new MapAppUserToPasien();
					$mapping->app_users_id = $dataauth->data->id;
					$mapping->pasien_id = $pasien_id;
					$mapping->status = 'AKTIF';
					$mapping->save();
				}	

				/*MapAppUserToPasien::updateOrInsert([
					'app_user_id' => Auth::id(),
					'pasien_id' => $pasien_id
				]);*/

				return response()->json([
					'status' => 'Success',
					'no_booking' => $bookingkamar_no,
				])->setStatusCode(200, "Success");
			} catch (Exceptions $ex) {
			}
		}
	}

    public function astore(Request $request)
    {
	//
	$validator = Validator::make($request->all(), [
	    'ruangan_id' => 'required',
	    'kamarruangan_id' => 'required',
	    'kelaspelayanan_id' => 'required',
	    'bookingkamar_no' => 'required',
	    'no_rekam_medik' => 'required'
	], [
	    'kelaspelayanan_id' => "Pilih Kelas",
	    'ruangan_id.required' => 'Pilih Ruangan',
	]);

	if ($validator->fails()) {
	   return \Response::json($validator->errors());
	} else {
	    $kamarRuangan = \App\KamarRuangan::select('ruangan_id','kelaspelayanan_id')
		->where("kamarruangan_id", $request->kamarruangan_id)->first();
	    $docRekamMedis = \App\DokRekamMedis::select('pasien_id')
		->where("nodokumenrm", $request->nodokumenrm)->first();
	    
	    $pasien_id = $this->rekammedis($request, true)->pasien_id;
	    // cari kamar yang tersedia
	    //
	    $availableRoom = \App\KamarRuangan::where('keterangan_kamar', 'TERSEDIA')->count();

	    $bookingKamar = new BookingKamar;
	    $bookingKamar->ruangan_id = $kamarRuangan->ruangan_id;
	    $bookingKamar->kamarruangan_id = $request->kamarruangan_id;
	    $bookingKamar->kelaspelayanan_id = $kamarRuangan->kelaspelayanan_id;
	    $bookingKamar->bookingkamar_no = $request->bookingkamar_no;
	    $bookingKamar->pasien_id = $pasien_id;

	    $bookingKamar->save();
	}
	
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function rekammedis(Request $request, $response = false)
    {
	$validator = Validator::make($request->all(), [
	    'no_rekam_medik' => 'required',
	]);

	if ($validator->fails() ) {
	    return Response()->json($validator->errors())
		->setStatusCode(400, "Error");
	} else {
	    $no_rekam_medik = $request->no_rekam_medik;
		$Pasien = Pasien::select(DB::raw('pasien_id, nama_pasien, jeniskelamin, kecamatan_id, 
			kabupaten_id, kelurahan_id, propinsi_id, suku_id, tempat_lahir, tanggal_lahir'))
			->with(['kelurahan', 'kecamatan', 'kabupaten', 'provinsi', 'suku', 'pendidikan', 'pekerjaan'])
			->where("no_rekam_medik", $no_rekam_medik)->first();
		
		if ($Pasien == null) {
			return Response(['status' => 'Failed'])->setStatusCode(200, "Success");
		}

	    if ($response) return ($Pasien->pasien_id);

	    return Response(['status' => 'Success', 'res' => $Pasien])->setStatusCode(200, "Success");
	}	    
	}

	public function listruangan()
	{
		$instalasi_ri = Instalasi::select('instalasi_id')->where('instalasi_nama', 'Rawat Inap')->first();
		$instalasi_id = $instalasi_ri->instalasi_id;

		$ruangan = Ruangan::select('ruangan_id', 'ruangan_nama')
				->where([
					['ruangan_aktif', 'true'],
					['instalasi_id', $instalasi_id]
				])->orderBy('ruangan_nama')->get();

		return response()->json($ruangan)->setStatusCode(200, "Good");
	}

	public function listkamar(Request $request)
	{
		$kamarruangan = KamarRuangan::select(DB::Raw("kamarruangan_id, CONCAT(kamarruangan_nokamar, '- Bed ', kamarruangan_nobed, '(', keterangan_kamar,  ')'  ) kamarruangan_nokamar "))
				->where([
						['kamarruangan_aktif', 'true'],
						['ruangan_id', $request->ruangan_id]
				])->orderBy('kamarruangan_nokamar')->get();
		return response()->json($kamarruangan)->setStatusCode(200, "Good");
	}

	public function listkelasruangan(Request $request)
	{
		$kelaspelayanan_id = KamarRuangan::select('kelaspelayanan_id')
			->where('kamarruangan_id', $request->kamarruangan_id)->first()->kelaspelayanan_id;

		$kelasruangan = KelasPelayanan::select('kelaspelayanan_nama', 'kelaspelayanan_id')
				->where('kelaspelayanan_id', $kelaspelayanan_id)
				->get();	

		return response()->json($kelasruangan)->setStatusCode(200, "Good");
	}

	public function nomorbooking(Request $request) {
		$nobooking = [];

		$decoded_jwt = $request->decoded_jwt;
		$user_id = $decoded_jwt->data->id;

		// get pasien from user id
		$mapping = MapAppUserToPasien::where('app_users_id', $user_id)->get();
		$pasien = [];
		foreach($mapping as $map) {
			$pasien[] = $map->pasien_id;
		}
		
		// get booking number
		$pesankamar = BookingKamar::select('bookingkamar_no', 'create_time')
				->orderBy('create_time', 'DESC')
				->whereIn('pasien_id', $pasien)
				->limit(4)
				->get();
		
		return response()->json($pesankamar)->setStatusCode(200, "Good");
	}

}
