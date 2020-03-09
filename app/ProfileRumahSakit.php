<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProfileRumahSakit extends Model
{
    //
	protected $table = 'profilrumahsakit_m';
	protected $primaryKey = 'profilrumahsakit_id';
	
	public function pasien() {
		return $this->hasMany('App\Pasien');
	}
}
