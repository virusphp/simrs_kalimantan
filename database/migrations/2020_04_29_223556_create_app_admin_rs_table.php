<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAppAdminRsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('app_admin_rs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('email_admin');
            $table->string('password');
            $table->string('username');
            $table->string('nama');
            $table->boolean('is_active');
            $table->enum('level', ['ADMIN', 'USER'])->default('USER');
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
        Schema::dropIfExists('app_admin_rs');
    }
}
