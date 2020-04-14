<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use App\Ruangan;

class RumahSakitController extends Controller
{
	//
	public function poli() {
		$ruangan = Ruangan::select('ruangan_id', 'ruangan_nama')
				->where([
					['ruangan_aktif', 'true'],
					['instalasi_id', '2']
				])->orderBy('ruangan_nama')->get();
		
		return response()->json($ruangan)->setStatusCode(200, "Good");
	}

	public function jadwalbukapoli(Request $request) {
		return \Response::json(\App\JadwalBukaPoli::select(DB::raw("jadwalbukapoli_id, concat(hari, ' - ', jmabuka) as buka"))
			->orderBy('jadwalbukapoli_id')->where('ruangan_id', $request->ruangan_id)->get());
	}

	public function dokter(Request $request) {
		return \Response::json(
			\App\JadwalDokter::select(
				DB::raw("jadwaldokter_m.pegawai_id, concat(gelardepan,' ', nama_pegawai ,  ', ', gelarbelakang_nama) as nama_pegawai"))
			->orderBy('nama_pegawai')
			->join('pegawai_m', 'pegawai_m.pegawai_id','=','jadwaldokter_m.pegawai_id')
			->join('gelarbelakang_m', 'gelarbelakang_m.gelarbelakang_id','=','pegawai_m.gelarbelakang_id')
			->where('ruangan_id', $request->ruangan_id)->distinct()->get());
	}

	public function jadwaldokter(Request $request) {
		$result = \App\JadwalDokter::select(
			DB::raw("jadwaldokter_id, concat(jadwaldokter_hari, ', ', jadwaldokter_buka) as buka"))
			->orderBy('jadwaldokter_tgl')->where([
				[ 'pegawai_id', '=', $request->pegawai_id],
				['ruangan_id', $request->ruangan_id]
			])->groupBy('jadwaldokter_hari','jadwaldokter_buka', 'jadwaldokter_id')->get();
		$jadwaldokter = [];
		$filter = [];
		foreach($result as $res) {
			$key = $res->buka;
			if (!array_key_exists($key, $filter)) {
				$filter[$key] = [
					'jadwaldokter_id' => $res->jadwaldokter_id,
					'buka' => $res->buka,
				];
			}
		}

		foreach($filter as $filt) {
			$jadwaldokter[] = $filt;
		}
		return \Response::json($jadwaldokter);
	}

	public function jadwaldokterpoli(Request $request) {
		return \Response::json(DB::table('jadwaldokter_m')->select(DB::raw("
				jadwaldokter_id, 
				concat(gelardepan, ' ', nama_pegawai, ' ', 
					jadwaldokter_hari, 
					' (', jadwaldokter_buka , 
					' - ', jadwaldokter_tutup, ')') as buka"))
				->join('pegawai_m', 'jadwaldokter_m.pegawai_id', '=', 'pegawai_m.pegawai_id')->get());

		// return \Response::json(\App\JadwalDokter::select(DB::raw("jadwaldokter_id, concat(jadwaldokter_hari, '(', jadwaldokter_buka , '-', jadwaldokter_tutup, ')')"))->join('pegawai_m', 'pegawai_m.pegawai_id = jadwaldokter_m.pegawai_id')
		//	->orderBy('jadwaldokter_id')->where('ruangan_id', $request->ruangan_id)->get());
	}

    public function buatjanjipoli(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'namadepan' => 'required',
            'nama_pasien' => 'required',
            'jeniskelamin' => 'required', 
            'alamat_pasien' => 'required', 
            'propinsi_id' => 'required',
            'kabupaten_id' => 'required',
            'kecamatan_id' => 'required',
            'kelurahan_id' => 'required',
            'pekerjaan_id' => 'required',
            'warga_negara' => 'required',
            'agama' => 'required', 
            'tanggal_lahir' => 'required',
		], [
			'jeniskelamin.required' => "Pilih Jenis Kelamin",
            'propinsi.required' => 'Pilih Propinsi',
            'kabupatan.required' => 'Pilih Kakupatan',
            'kecamatan.required' => 'Pilih Kekamatan',
            'kelurahan.required' => 'Pilih Kekurahan',
            'pekerjaan.required' => 'Pilih Peperjaan',
            'warga_negara.required' => 'Pilih Warga negara',
        ]);

        if ($validator->fails()) {
            return \Response::json($validator->errors());
         } else {

            // calculate age
            $from = new \DateTime($request->tanggal_lahir);
            $to = new \DateTime('today');
            $age = $from->diff($to)->y;
            // print($age);
            // kelompok umur
            $kelompokumur = \App\KelompokUmur::select('kelompokumur_id')
                ->where([
                    ['kelompokumur_minimal', '<=', $age], 
                    ['kelompokumur_maksimal', '>=', $age],
                    ['kelompokumur_aktif', '=', 'true']
                ])->first();

            // Kelompok Umur Id
            $kelompokumur_id = $kelompokumur->kelompokumur_id;

            // print($kelompokumur_id);
            $profilrs_id = \App\ProfileRumahSakit::first()->profilrs_id;
			$no_rekam_medik = '';

            $tgl_rekam_medik = date('Y-m-d');

            $data_pasien = [
                'kelompokumur_id' => $kelompokumur_id,
                'profilrs_id' => $profilrs_id,
            ];

            $daftarpoli = new \App\DaftarPoli;
	
            foreach($data_pasien as $key => $val) {
                $daftarpoli->{$key} = $val;
			}

			$daftarpoli->nama_depan = $request->namadepan;
			$daftarpoli->nama_pasien = $request->nama_pasien;
			$daftarpoli->jeniskelamin = $request->jeniskelamin; 
			$daftarpoli->alamat_pasien = $request->alamat_pasien; 
			$daftarpoli->propinsi_id = $request->propinsi_id;
			$daftarpoli->kabupaten_id = $request->kabupaten_id;
			$daftarpoli->kecamatan_id = $request->kecamatan_id;
			$daftarpoli->kelurahan_id = $request->kelurahan_id;
			$daftarpoli->pekerjaan_id = $request->pekerjaan_id;
			$daftarpoli->warga_negara = $request->warga_negara;
			$daftarpoli->agama = $request->agama; 
			$daftarpoli->tanggal_lahir = $request->tanggal_lahir;

			$daftarpoli->pegawai_id = $request->pegawai_id;
			$daftarpoli->jadwaldokter_id = $request->jadwaldokter_id;
			$daftarpoli->ruangan_id = $request->ruangan_id;
			$daftarpoli->file = $request->file ? $request->file : '';
			
			try {
				$daftarpoli->save();
				// TODO
				// buat janji poli
				$buatjanjipoli = new \App\BuatJanjiPoli();
				$buatjanjipoli->pegawai_id = $request->pegawai_id;
				$buatjanjipoli->ruangan_id = $request->ruangan_id;


				//return response()->json([
					//'status' => 'Success',
					//'no_rekam_medik' => $no_rekam_medik,
				//])->setStatusCode(200, "Success");
			}catch (Exceptions $ex) {

			}

        // print_r((Array)$request);
		// die();
		 }
	}

    public function noRekamMedik($prefix='', $is_pasienluar='FALSE')
    {
        $default = null;
        $digit_rm = self::DigitRM();
        for ($i=1;$i<=$digit_rm;$i++) {
            if ($i == $digit_rm) {
                $default .= "1";
            } else {
                $default .= "0";
            }
        }
                
        // $sql = "SELECT CAST(SUBSTR(no_rekam_medik,".(strlen($prefix)+1).",".(strlen($default)).") AS integer) nomaksimal 
		// 			FROM pasien_m WHERE ispasienluar=$is_pasienluar AND no_rekam_medik like '".$prefix."%' 
		// 			ORDER BY no_rekam_medik DESC 
		// 			LIMIT 1";

        // $pasien = Yii::app()->db->createCommand($sql)->queryRow();

        $pasien = \App\Pasien::select(DB::raw('CAST(SUBSTR(no_rekam_medik,'.
            (strlen($prefix)+1).','.(strlen($default)).') AS integer) nomaksimal'))
                ->where('ispasienluar', '=', $is_pasienluar)
                ->where('no_rekam_medik', 'like', $prefix.'%')
                ->orderBy('no_rekam_medik','DESC')->first();
        
        if (isset($pasien->nomaksimal)) {
            $nomaksimal = $pasien->nomaksimal+1;

            // $sql = "SELECT normlama_min, normlama_maks FROM konfigsystem_k LIMIT 1";
            // $normlama = Yii::app()->db->createCommand($sql)->queryRow();
            // var_dump($nomaksimal);
            // if ($nomaksimal == $normlama['normlama_min']) {
            //     $nomaksimal = ((int)$normlama['normlama_maks'])+1;
            // } elseif ($nomaksimal >= ((int)$normlama['normlama_min']) && $nomaksimal < ((int)$normlama['normlama_maks']+1)) {
            //     $nomaksimal = ((int)$normlama['normlama_maks'])+1;?
            // }

            $normlama = \App\KonfigSystem::select('normlama_min', 'normlama_maks')->first();

            if ($nomaksimal == $normlama->normlama_min) {
                $nomaksimal = ((int)$normlama->normlama_maks)+1;
            } elseif ($nomaksimal >= ((int)$normlama->normlama_min) && $nomaksimal < ((int)$normlama->normlama_maks+1)) {
                $nomaksimal = ((int)$normlama->normlama_maks)+1;
            }
            $no_rm_baru = $prefix.str_pad($nomaksimal, $digit_rm, 0, STR_PAD_LEFT);
        } else {
            $no_rm_baru = $prefix.$default;
        }
        // var_dump($no_rm_baru); die;
        return trim($no_rm_baru);
    }
	
	public static function DigitRM()
    {
        // $sql="SELECT jmldigitrm FROM konfigsystem_k LIMIT 1";
        // $Konfigjmldigitrm = Yii::app()->db->createCommand($sql)->queryRow();
        // $digitrm = $Konfigjmldigitrm['jmldigitrm'];
        // return $digitrm;
        return \App\KonfigSystem::select('jmldigitrm')->first()->jmldigitrm;
    }


}
