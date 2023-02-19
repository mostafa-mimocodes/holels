<?php

namespace Database\Seeders;

use App\Imports\ImportHotel;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Maatwebsite\Excel\Facades\Excel;

class HotelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $path = public_path() . '/database/hotels.csv';
        Excel::import(new ImportHotel, $path);
    }
}
