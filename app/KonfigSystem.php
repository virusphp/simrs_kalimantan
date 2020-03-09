<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class KonfigSystem extends Model
{
    //
	protected $table = 'konfigsystem_k';
	protected $primaryKey = 'konfigsystem_id';

	public function pasien() {
		return $this->hasMany('App\Pasien');
	}
}
