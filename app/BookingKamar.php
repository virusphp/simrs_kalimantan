<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BookingKamar extends Model
{
    //
    protected $table = 'bookingkamar_t';
	protected $primaryKey = 'bookingkamar_id';

	public $timestamps = false;

    protected $fillable = [
	'ruangan_id', 'pasien_id', 'kamarruangan_id', 'kelaspelayanan_id', 'bookingkamar_no',
	'tgltransaksibooking', 'tglbookingkamar', 'statusbooking', 'keteranganbooking',
	'create_time', 'update_time', 'create_loginpemakai_id', 'update_loginpemakai_id',
	'create_ruangan', 'statuskonfirmasi', 'tglakhirkonfirmasi, pendaftaran_id'
    ];

    public function dokrekammedis() {
	return $this->belongsTo('App\Pasien', 'pasien_id', 'pasien_id');
    }

    public function ruangan() {
	return $this->belongsTo('App\Ruangan', 'ruangan_id', 'ruangan_id');
    }

    public function kamarruangan() {
	return $this->belongsTo('App\KamarRuangan', 'kamarruangan_id', 'kamarruangan_id');
    }

    public function kelaspelayanan() {
	return $this->belongsTo('App\KelasPelayanan', 'kelaspelayanan_id', 'kelaspelayanan_id');
    }
}
