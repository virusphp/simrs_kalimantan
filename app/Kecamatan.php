<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Kecamatan extends Model
{
	//
	protected $table = 'kecamatan_m';
	protected $primaryKey = 'kecamatan_id';

	public function pasien() {
		return $this->hasMany('App\Pasien', 'kecamatan_id', 'kecamatan_id');
	}
}
