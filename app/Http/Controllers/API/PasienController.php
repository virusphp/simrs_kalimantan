<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use App\Instalasi;
use App\Provinsi;

class PasienController extends Controller
{
    public function show()
    {
	return \Response::json(\App\Pendaftaran::first());
    }

    public function registerpasienbaru(Request $request)
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
            $no_rekam_medik = $this->noRekamMedik();

            $tgl_rekam_medik = date('Y-m-d');

            $request->merge([
                'profilrs_id' => $profilrs_id,
                'kelompokumur_id' => $kelompokumur_id,
                'no_rekam_medik' => $no_rekam_medik,
                'tgl_rekam_medik' => $tgl_rekam_medik,
                'statusrekammedis' => 'AKTIF',
                'create_loginpemakai_id' => 21,

            ]);

            $pasien = new \App\Pasien;
            $request = $request->toArray();
            // print_r($request);

            foreach($request as $key => $val) {
                $pasien->{$key} = $val;
            }
	    $pasien->create_time = date('Y-m-d');

	    $pasien->save();

	    /*try {
		$pasien->save();
		return response()->json([
			'status' => 'Success',
			'no_rekam_medik' => $no_rekam_medik,
		])->setStatusCode(200, "Success");
	    }catch (Exceptions $ex) {

	    }*/

        // print_r((Array)$request);
        // die();
        }
    }

    public function provinsi() {
        return \Response::json(Provinsi::select('propinsi_nama', 'propinsi_id')->get());
    }

    public function kabupaten(Request $request){
        return \Response::json(\App\Kabupaten::select('kabupaten_nama', 'kabupaten_id')
        ->orderBy('kabupaten_nama')->where('propinsi_id', $request->propinsi_id)->get());
    }

    public function kecamatan(Request $request){
        return \Response::json(\App\Kecamatan::select('kecamatan_nama', 'kecamatan_id')
        ->orderBy('kecamatan_nama')->where('kabupaten_id', $request->kabupaten_id)->get());
    }

    public function kelurahan(Request $request){
        return \Response::json(\App\Kelurahan::select('kelurahan_nama', 'kelurahan_id')
        ->orderBy('kelurahan_nama')->where('kecamatan_id', $request->kecamatan_id)->get());
    }

    public function pekerjaan() {
        return \Response::json(\App\Pekerjaan::select('pekerjaan_nama', 'pekerjaan_id')
            ->orderBy('pekerjaan_nama')->get());
    }

    // TODO
    // Konversi Yii to Laravel Eloquent

    public static function DigitRM()
    {
        // $sql="SELECT jmldigitrm FROM konfigsystem_k LIMIT 1";
        // $Konfigjmldigitrm = Yii::app()->db->createCommand($sql)->queryRow();
        // $digitrm = $Konfigjmldigitrm['jmldigitrm'];
        // return $digitrm;
        return \App\KonfigSystem::select('jmldigitrm')->first()->jmldigitrm;
    }

    /**
     * Generate no_rekam_medik untuk pasien_m
     * @param type $prefix
     * @param type $is_pasienluar
     * @return type
     */
    
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

}
