<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AppUsers extends Model
{
    //
    protected $fillable = [
        'nama', 'email', 'password', 'identitas', 'no_identitas', 'alamat'
    ];
}
