<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class JadwalBukaPoli extends Model
{
		//
	protected $table = 'jadwalbukapoli_m';
	protected $primaryKey = 'jadwalbukapoli_id';

	public function ruangan() {
		return $this->hasMany('App\Ruangan');
	}
}

