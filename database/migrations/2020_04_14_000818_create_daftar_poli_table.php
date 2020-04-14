<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDaftarPoliTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('daftar_poli', function (Blueprint $table) {
			$table->bigIncrements('id');
			$table->integer('kelompokumur_id');
			$table->integer('kecamatan_id');
			$table->integer('profilrs_id');
			$table->integer('kelurahan_id');
			$table->integer('pekerjaan_id');
			$table->integer('kabupaten_id');
			$table->integer('propinsi_id');
			$table->string('nama_depan');
			$table->string('nama_pasien');
			$table->string('jeniskelamin');
			$table->date('tanggal_lahir');
			$table->string('agama');
			$table->string('warga_negara');
			$table->integer('pegawai_id');
			$table->integer('ruangan_id');
			$table->integer('jadwaldokter_id');
			$table->text('file');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('daftar_poli');
    }
}
