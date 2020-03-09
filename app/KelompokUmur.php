<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class KelompokUmur extends Model
{
    //
	protected $table = 'kelompokumur_m';
	protected $primaryKey = 'kelompokumur_id';
	
	public function pasien() {
		return $this->hasMany('App\Pasien');
	}
}
