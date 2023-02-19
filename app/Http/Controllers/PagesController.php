<?php

namespace App\Http\Controllers;

use App\Imports\ImportHotel;
use Carbon\Carbon;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;

class PagesController extends Controller
{
    public function index()
    {
        return Inertia::render('Dashboard');
    }
}
