<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PenjaminPasien extends Model
{
    //
    protected $table = 'penjaminpasien_m';
    protected $primaryKey = 'penjamin_id';

    public function pendaftaran()
    {
	return $this->hasMany('App\Pendaftaran', 'penjamin_id', 'penjamin_id');
    }
}
