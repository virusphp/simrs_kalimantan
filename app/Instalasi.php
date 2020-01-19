<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Instalasi extends Model
{
		//
	protected $table = 'instalasi_m';
	protected $primaryKey = 'instalasi_id';

	public function ruangan() {
		return $this->hasMany('App\Ruangan');
	}
}
