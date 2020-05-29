<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
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
			\App\DokterView::select(
				DB::raw("dokter_v.pegawai_id, concat(dokter_v.gelardepan,' ', dokter_v.nama_pegawai ,  ', ', gelarbelakang_nama) as nama_pegawai"))
			->orderBy('nama_pegawai')
			->where('ruangan_id', $request->ruangan_id)->distinct()->get());
	}

	public function __dokter(Request $request) {
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
            'keluhan_pasien' => 'required'
		], [
			'jeniskelamin.required' => "Pilih Jenis Kelamin",
            'propinsi.required' => 'Pilih Propinsi',
            'kabupatan.required' => 'Pilih Kakupatan',
            'kecamatan.required' => 'Pilih Kekamatan',
            'kelurahan.required' => 'Pilih Kekurahan',
            'pekerjaan.required' => 'Pilih Peperjaan',
            'warga_negara.required' => 'Pilih Warga negara',
            'no_telp.required' => 'Masukkan Nomor Telepon',
            'no_mobile.required' => 'Masukkan Nomor Hp',
            'keluhan_pasien.required' => 'Keluhan tidak boleh kosong',
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
			$daftarpoli->keluhan_pasien = $request->keluhan_pasien; 
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
			$daftarpoli->tanggal_pesan = $request->pesan_tanggal;
			$daftarpoli->no_telp = $request->no_telp;
			$daftarpoli->no_mobile = $request->no_mobile;

			$num = rand(0, 1000);
			if ($request->file('file') != null) {
				$genfile = $num . date('YmdHis') . $request->file('file');
				$path = $request->file('file')->store($genfile);
			}

			$daftarpoli->file = $request->file('file') != null ? $path : '';


			
			try {
				$daftarpoli->save();
				// TODO
				// buat janji poli
				//$buatjanjipoli = new \App\BuatJanjiPoli();
				//$buatjanjipoli->pegawai_id = $request->pegawai_id;
				//$buatjanjipoli->ruangan_id = $request->ruangan_id;


				return response()->json([
					'status' => 'Success',
					'no_rekam_medik' => '',
				])->setStatusCode(200, "Success");
				
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
	
	public function getDaftarPoli() {
		return \Response::json(\App\DaftarPoli::where('is_confirmed', '=', '0')->
			with('ruangan', 'pegawai', 'jadwaldokter')->get());
    }

	public function getDaftarPoliById(Request $request) {
		return \Response::json(\App\DaftarPoli::where('is_confirmed', '=', '0')->
            with('ruangan', 'pegawai', 'jadwaldokter')
                ->where('id', $request->id)
                ->first());
	}

	public function confirmDaftarPoli(Request $request) {
		$daftarpoli = \App\DaftarPoli::find($request->input('id_daftar_poli'));
        
        if ($daftarpoli->no_rm == '') {
            $this->addpasienbaru($daftarpoli);
        } else {
            try {
                // add to pendaftaran
                //$this->pasienadmisi($pasien);
		$no_rekam_medik = $daftarpoli->no_rm;
		$pasien = \App\Pasien::where('no_rekam_medik', $no_rekam_medik)->first();
                $pendaftaran = $this->pendaftaran($pasien, $daftarpoli);
                $daftarpoli->is_confirmed = '1';
                $daftarpoli->save();
                return response()->json([
                    'status' => 'Success',
                    'no_rekam_medik' => $no_rekam_medik,
                    'pendaftaran' => [
                        'id' => $pendaftaran->pendaftaran_id,
                        'no' => $pendaftaran->no_pendaftaran,
                        'no_urutantri' => $pendaftaran->no_urutantri
                    ]
                ])->setStatusCode(200, "Success");
            }catch (Exceptions $ex) {
                return response()->json(['message' => $ex->getMessage()]);
            }
        }

    }

    private function addpasienbaru($daftarpoli)
    {
        $no_rekam_medik = $this->noRekamMedik();
		$tgl_rekam_medik = date('Y-m-d');

		$pasien = new \App\Pasien;

		$pasien->namadepan = $daftarpoli->nama_depan;
		$pasien->nama_pasien = $daftarpoli->nama_pasien;
		$pasien->jeniskelamin = $daftarpoli->jeniskelamin; 
		$pasien->alamat_pasien = $daftarpoli->alamat_pasien; 
		$pasien->propinsi_id = $daftarpoli->propinsi_id;
		$pasien->kabupaten_id = $daftarpoli->kabupaten_id;
		$pasien->kecamatan_id = $daftarpoli->kecamatan_id;
		$pasien->kelurahan_id = $daftarpoli->kelurahan_id;
		$pasien->pekerjaan_id = $daftarpoli->pekerjaan_id;
		$pasien->warga_negara = $daftarpoli->warga_negara;
		$pasien->agama = $daftarpoli->agama; 
		$pasien->tanggal_lahir = $daftarpoli->tanggal_lahir;
		$pasien->profilrs_id = $daftarpoli->profilrs_id;
		$pasien->kelompokumur_id = $daftarpoli->kelompokumur_id;
		$pasien->no_rekam_medik = $no_rekam_medik;
		$pasien->tgl_rekam_medik = $tgl_rekam_medik;
		$pasien->statusrekammedis = 'AKTIF';		
		$pasien->create_loginpemakai_id = 21;
		$pasien->no_telepon_pasien = $daftarpoli->no_telp;
		$pasien->no_mobile_pasien = $daftarpoli->no_mobile;
	
		$pasien->create_time = date('Y-m-d');

	    try {
            $pasien->save();
            // add to pendaftaran
            //$this->pasienadmisi($pasien);
            $pendaftaran = $this->pendaftaran($pasien, $daftarpoli);
            $daftarpoli->is_confirmed = '1';
            $daftarpoli->save();
            return response()->json([
                'status' => 'Success',
                'no_rekam_medik' => $no_rekam_medik,
                'pendaftaran' => [
                    'id' => $pendaftaran->pendaftaran_id,
                    'no' => $pendaftaran->no_pendaftaran,
                    'no_urutantri' => $pendaftaran->no_urutantri
                ]
            ])->setStatusCode(200, "Success");

	    }catch (Exceptions $ex) {
            return response()->json(['message' => $ex->getMessage()]);
        }
    }

    private function pendaftaran($pasien, $daftar_poli) 
    {
        $pendaftaran = new \App\Pendaftaran();
        //print_r($pasien);
	//print($pasien->tanggal_lahir);die();
	
        $from = new \DateTime($pasien->tanggal_lahir);
        $to = new \DateTime('today');
        $year = $from->diff($to)->y;
        $month = $from->diff($to)->m;
        $day = $from->diff($to)->d;

        $no_pendaftaran = $this->no_pendaftaran();

        $pendaftaran->pasien_id = $pasien->id;
        $pendaftaran->kelompokumur_id = $pasien->kelompokumur_id;
        $pendaftaran->tgl_pendaftaran = $pasien->tgl_rekam_medik;
        $pendaftaran->ruangan_id = $daftar_poli->ruangan_id;
        $pendaftaran->create_loginpemakai_id = $pasien->create_loginpemakai_id;
        $pendaftaran->no_pendaftaran = 'RJ' . $no_pendaftaran;
        $pendaftaran->create_time = date('Y-m-d H:i:s');
        $pendaftaran->no_urutantri = $this->no_urutantri();
        $pendaftaran->statuspasien = 'PENGUNJUNG BARU';
        $pendaftaran->kunjungan = 'KUNJUNGAN BARU';
        $pendaftaran->alihstatus = false;
        $pendaftaran->byphone = false;
        $pendaftaran->kunjunganrumah = false;
        $pendaftaran->statusmasuk = ($daftar_poli->file != '') ? 'RUJUKAN' : 'NON RUJUKAN';
	$pendaftaran->umur = $year . 'Thn '. $month . ' Bln ' . $day . ' Hr';
        $pendaftaran->save();

        return $pendaftaran;
    }

    private function pasienadmisi($pasien)
    {
    }

    private function no_pendaftaran () {
        try{
            $pendaftaran = \App\Pendaftaran::select('no_pendaftaran')->where(DB::raw("left(no_pendaftaran, 2)"), '=', 'RJ')->orderBy('no_pendaftaran','desc')->first();
            $no_pendaftaran = str_replace('RJ', '', $pendaftaran->no_pendaftaran);
            return $no_pendaftaran = (Integer) $no_pendaftaran + 1; 
        } catch (\Exception $e)  {
            return $e->getMessage();
        }
    }

    private function no_urutantri() {
        try {
            $pendaftaran = \App\Pendaftaran::select('no_urutantri')->where(DB::raw("left(no_pendaftaran, 2)"), '=', 'RJ')->orderBy('no_urutantri','desc')->first();
            $no_urutantri = str_replace('RJ', '', $pendaftaran->no_urutantri);
            return $no_urutantri = (Integer) $no_urutantri + 1; 
        } catch (\Exception $e)  {
            return $e->getMessage();
        }
    }



    public function buatjanjipolipasienlama(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'pegawai_id' => 'required',
            'ruangan_id' => 'required',
            'jadwaldokter_id' => 'required', 
            'pesan_tanggal' => 'required',
            'no_rekam_medik' => 'required',
            'keluhan_pasien' => 'required'
		], [
			'pegawai_id.required' => "Pilih Dokter",
            'ruangan_id.required' => 'Pilih Poli',
            'jadwaldokter_id.required' => 'Pilih Jadwal Poli',
            'tanggal_pesan.required' => 'Masukkan Tanggal Pesan',
            'no_rekam_medik.required' => 'No Rekam Medik tidak boleh kosong',
            'keluhan_pasien.required' => 'Keluhan tidak boleh kosong',
        ]);

        if ($validator->fails()) {
            return \Response::json($validator->errors());
         } else {

            $daftarpoli = new \App\DaftarPoli;
            $pasien = \App\Pasien::where('no_rekam_medik', $request->no_rekam_medik)->first();

			$daftarpoli->nama_depan = '';
			$daftarpoli->nama_pasien = $pasien->nama_pasien;
			$daftarpoli->jeniskelamin = $pasien->jeniskelamin; 
			$daftarpoli->alamat_pasien = $pasien->alamat_pasien; 
			$daftarpoli->propinsi_id = $pasien->propinsi_id;
			$daftarpoli->kabupaten_id = $pasien->kabupaten_id;
			$daftarpoli->kecamatan_id = $pasien->kecamatan_id;
			$daftarpoli->kelurahan_id = $pasien->kelurahan_id;
			$daftarpoli->pekerjaan_id = $pasien->pekerjaan_id;
			$daftarpoli->warga_negara = $pasien->warga_negara;
			$daftarpoli->agama = $pasien->agama; 
            $daftarpoli->tanggal_lahir = $pasien->tanggal_lahir;
            $daftarpoli->kelompokumur_id = $pasien->kelompokumur_id;
            $daftarpoli->profilrs_id = $pasien->profilrs_id;
            $daftarpoli->no_rm = $request->no_rekam_medik;

			$daftarpoli->pegawai_id = $request->pegawai_id;
			$daftarpoli->jadwaldokter_id = $request->jadwaldokter_id;
            $daftarpoli->ruangan_id = $request->ruangan_id;
            $daftarpoli->tanggal_pesan = $request->pesan_tanggal;
			$daftarpoli->keluhan_pasien = $request->keluhan_pasien; 

			$num = rand(0, 1000);
			if ($request->file('file') != null) {
				$genfile = $num . date('YmdHis') . $request->file('file');
				$path = $request->file('file')->store($genfile);
			}

			$daftarpoli->file = $request->file('file') != null ? $path : '';


			try {
				$daftarpoli->save();
				// TODO
				// buat janji poli
				//$buatjanjipoli = new \App\BuatJanjiPoli();
				//$buatjanjipoli->pegawai_id = $request->pegawai_id;
				//$buatjanjipoli->ruangan_id = $request->ruangan_id;


				return response()->json([
					'status' => 'Success',
					'no_rekam_medik' => '',
				])->setStatusCode(200, "Success");
				
			}catch (Exceptions $ex) {
                return \Response::json($ex->getMessage());
			}

        // print_r((Array)$request);
		// die();
		 }
    }

    public function gantipoli(Request $request)
    {
        $daftarpoli = \App\DaftarPoli::find($request->id_daftar_poli);
        
        $arr = $daftarpoli->toArray();
        $toJson = json_encode($arr);
        $toArray = json_decode($toJson, true);
        
        $daftarpoli->pegawai_id = $request->pegawai_id;
        $daftarpoli->ruangan_id = $request->ruangan_id;
        $daftarpoli->jadwaldokter_id = $request->jadwaldokter_id;
        $daftarpoli->tanggal_pesan = $request->tanggal_pesan;
        
        try {
            $saved = $daftarpoli->save();
            if ($saved) {
                return \Response::json([
                    'prev' => $toArray,
                    'status' => 'Success'
                ]);
            }
            // return $toArray;
        } catch (\Exception $ex) {
            return $ex->getMessage();
        } 
    }
}
