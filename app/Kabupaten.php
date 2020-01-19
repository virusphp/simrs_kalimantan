<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Kabupaten extends Model
{
    //
	protected $table = 'kabupaten_m';
	protected $primaryKey = 'kabupaten_id';
	
	public function pasien() {
		return $this->hasMany('App\Pasien');
	}
}
