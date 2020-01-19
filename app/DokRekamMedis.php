<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DokRekamMedis extends Model
{
    //
    protected $table = 'dokrekammedis_m';
    protected $primaryKey = 'dokrekammedis_id';

    public function pasien() {
	return $this->belongsTo('App\Pasien', 'pasien_id', 'pasien_id');
    }
}
