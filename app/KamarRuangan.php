<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class KamarRuangan extends Model
{
    //
    protected $table = 'kamarruangan_m';
    protected $primaryKey = 'kamarruangan_id';
    
    public function ruangan() {
	return $this->belongsTo('App\Ruangan', 'ruangan_id', 'ruangan_id');
    }

    public function kelaspelayanan() {
	return $this->belongsTo('App\KelasPelayanan', 'kelaspelayanan_id', 'kelaspelayanan_id');
    }

    public function getKelasPelayananNamaAttribute() {
	return $this->attributes['keterangan_kamar'] = $this->kelaspelayanan()->kelaspelayanan_nama;
    }

}
