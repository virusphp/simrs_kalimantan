<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pendaftaran extends Model
{
    //
    protected $table = 'pendaftaran_t';
    protected $primaryKey = 'pendaftaran_id';
    public $timestamps = false;

    public function pasien() 
    {
	    return $this->belongsTo('App\Pasien', 'pasien_id', 'pasien_id');
    }

    public function instalasi() 
    {
	    return $this->belongsTo('App\Instalasi', 'instalasi_id', 'instalasi_id');
    }
    
    public function ruangan() 
    {
	    return $this->belongsTo('App\Ruangan', 'ruangan_id', 'ruangan_id');
    }
    
    public function jeniskasuspenyakit() 
    {
	    return $this->belongsTo('App\JenisKasusPenyakit', 'jeniskasuspenyakit_id', 'jeniskasuspenyakit_id');
    }
}
