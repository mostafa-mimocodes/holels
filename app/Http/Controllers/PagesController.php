<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Session;
use Inertia\Inertia;


class PagesController extends Controller
{
    public function index()
    {
        return Inertia::render('Dashboard');
    }
}
