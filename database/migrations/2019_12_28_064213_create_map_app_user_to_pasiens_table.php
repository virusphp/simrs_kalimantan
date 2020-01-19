<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMapAppUserToPasiensTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('map_app_user_to_pasiens', function (Blueprint $table) {
	    $table->bigIncrements('id');
	    $table->integer('app_users_id');
	    $table->integer('pasien_id');
	    $table->string('status');
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
        Schema::dropIfExists('map_app_user_to_pasiens');
    }
}
