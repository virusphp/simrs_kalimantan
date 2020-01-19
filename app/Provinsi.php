<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Provinsi extends Model
{
    //
	protected $table = 'propinsi_m';
	protected $primaryKey = 'propinsi_id';

	public function pasien() {
		return $this->hasMany('App\Pasien');
	}
}
