<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Kelurahan extends Model
{
    //
	protected $table = 'kelurahan_m';
	protected $primaryKey = 'kelurahan_id';
	
	public function pasien() {
		return $this->hasMany('App\Pasien');
	}
}
