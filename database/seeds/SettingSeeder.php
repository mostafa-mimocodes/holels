<?php

namespace Database\Seeders;

use App\Setting;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $setting = Setting::create([
            'logo_img' => '/img/brand/logo.svg'
        ]);
    }
}
