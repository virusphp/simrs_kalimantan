<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class JadwalDokter extends Model
{
	//
	protected $table = 'jadwaldokter_m';
	protected $primaryKey = 'jadwaldokter_id';
	
	public function pegawai() {
		return $this->belongsTo('App\Pegawai', 'pegawai_id', 'pegawai_id');
	}
}
