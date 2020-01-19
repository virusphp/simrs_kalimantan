<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ruangan extends Model
{
    //
    protected $table = 'ruangan_m';
    protected $primaryKey = 'ruangan_id';

    public function kamarruangan() {
		return $this->hasMany('App\KamarRuangan', 'ruangan_id', 'ruangan_id');
	}

	public function instalasi() {
		return $this->belongsTo('App\Instalasi');
	}
}
