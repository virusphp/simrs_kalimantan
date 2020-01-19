<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Suku extends Model
{
    //
	protected $table = 'suku_m';
	protected $primaryKey = 'suku_id';

	public function pasien() {
		return $this->hasMany('App\Pasien', 'suku_id', 'suku_id');
	}
}
