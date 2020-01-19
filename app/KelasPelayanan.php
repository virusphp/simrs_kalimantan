<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class KelasPelayanan extends Model
{
    //
    protected $table = 'kelaspelayanan_m';
    protected $primaryKey = 'kelaspelayanan_id';

    public function kamarruangan() {
	return $this->hasMany('App\KamarRuangan', 'kelaspelayanan_id', 'kelaspelayanan_id');
    }
}
