<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pasien extends Model
{
    //
    protected $table = 'pasien_m';
    protected $primaryKey = 'pasien_id';
	protected $casts = [
		'tanggal_lahir' => 'datetime:d M Y'
	];
	public $timestamps = false;

    public function dokrekammedis() {
		return $this->hasMany('App\DokRekamMedis', 'pasien_id', 'pasien_id');
	}
	
	public function provinsi() {
		return $this->belongsTo('App\Provinsi', 'propinsi_id', 'propinsi_id');
	}

	public function kecamatan() {
		return $this->belongsTo('App\Kecamatan', 'kecamatan_id', 'kecamatan_id');
	}

	public function kelurahan() {
		return $this->belongsTo('App\Kelurahan', 'kelurahan_id', 'kelurahan_id');
	}

	public function kabupaten() {
		return $this->belongsTo('App\Kabupaten', 'kabupaten_id', 'kabupaten_id');
	}

	public function pekerjaan() {
		return $this->belongsTo('App\Pekerjaan', 'pekerjaan_id', 'pekerjaan_id');
	}

	public function pendidikan() {
		return $this->belongsTo('App\Pendidikan', 'pendidikan_id', 'pendidikan_id');
	}

	public function suku() {
		return $this->belongsTo('App\Suku', 'suku_id', 'suku_id');
	}
}
