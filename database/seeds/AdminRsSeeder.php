<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class AdminRsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('app_admin_rs')->insert([
            'email_admin' => 'adminrsud@rsud.com',
            'password' => Hash::make('rsud4dmin!!!!?papua!?@'),
            'is_active' => true,
            'level' => 'ADMIN',
            'username' => 'admin',
            'nama' => 'admin',
        ]);
    }
}
