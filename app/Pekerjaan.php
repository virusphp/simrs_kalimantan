<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pekerjaan extends Model
{
    //
	protected $table = 'pekerjaan_m';
	protected $primaryKey = 'pekerjaan_id';
	
	public function pasien() {
		return $this->hasMany('App\Pasien');
	}
}
