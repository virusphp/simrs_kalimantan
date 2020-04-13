<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pegawai extends Model
{
	//
	protected $table = 'pegawai_m';
	protected $primaryKey = 'pegawai_id';

	public function jadwaldokter() {
		return $this->hasMany('App\JadwalDokter', 'jadwaldokter_id', 'jadwaldokter_id');
	}
}
