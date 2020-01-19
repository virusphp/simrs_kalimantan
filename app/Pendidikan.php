<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pendidikan extends Model
{
    //
	protected $table = 'pendidikan_m';
	protected $primaryKey = 'pendidikan_id';
	
	public function pasien() {
		return $this->hasMany('App\Pasien');
	}
}
