<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class JenisKasusPenyakit extends Model
{
    //
    protected $table = 'jeniskasuspenyakit_m';
    protected $primaryKey = 'jeniskasuspenyakit_id';
    public $timestamps = false;
}
