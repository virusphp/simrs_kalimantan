<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAppUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('app_users', function (Blueprint $table) {
	    $table->bigIncrements('id');
	    $table->string('email');
	    $table->string('password');
	    $table->string('nama');
	    $table->string('token')->nullable();
	    $table->string('identitas');
	    $table->string('no_identitas');
	    $table->text('alamat');
	    $table->smallInteger('rt')->nullable();
	    $table->smallInteger('rw')->nullable();
	    $table->integer('kelurahan_id')->nullable();
	    $table->integer('kecamatan_id')->nullable();
	    $table->integer('kabupaten_id')->nullable();
	    $table->integer('propinsi_id')->nullable();
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
        Schema::dropIfExists('app_users');
    }
}
