<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pendaftaran extends Model
{
    //
    protected $table = 'pendaftaran_t';
    protected $primaryKey = 'pendaftaran_id';

    public function pasien() 
    {
	return $this->belongsTo('App\Pasien', 'pasien_id', 'pasien_id');
    }
}
