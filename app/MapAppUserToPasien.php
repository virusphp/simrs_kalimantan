<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MapAppUserToPasien extends Model
{
		//
	protected $table = 'map_app_user_to_pasiens';
	protected $primaryKey = 'id';
	protected $fillable = [
		'app_users_id', 'pasien_id', 'status'
	];
}
