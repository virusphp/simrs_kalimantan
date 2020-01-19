<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class KelasRuangan extends Model
{
    protected $table = 'kelasruangan_m';

    public function ruangan() {
		return $this->belongsTo('App\Ruangan', 'ruangan_id', 'ruangan_id');
	}

	public function kelaspelayanan() {
		return $this->belongsTo('App\KelasPelayanan', 'kelaspelayanan_id', 'kelaspelayanan_id');
	}
    //
}
