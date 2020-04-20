<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DaftarPoli extends Model
{
	//
	protected $table = 'daftar_poli';

	public function ruangan() {
		return $this->belongsTo('\App\Ruangan', 'ruangan_id');
	}

	public function pegawai() {
		return $this->belongsTo('\App\Pegawai', 'pegawai_id');
	}

	public function jadwaldokter() {
		return $this->belongsTo('\App\JadwalDokter', 'jadwaldokter_id');
	}
}
