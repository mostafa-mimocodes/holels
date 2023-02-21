<?php

namespace App\Http\Controllers;

use App\Hotel;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class PagesController extends Controller
{
    public function index()
    {

        $hotels = Hotel::all();
        $totalPrice = $hotels->sum('price');
        $totalBookings = $hotels->count();
        $canceledBookings = $hotels->where('is_canceled',true)->count();

        // $test = $hotels->whereMonth('reservation_status_date','=', '06')->get()->groupBy(function ($val){
        //     return Carbon::parse($val->reservation_status_date)->format('d');
        // });

        // $arrivalDate = DB::table('hotels')->where('is_canceled',0)->whereMonth('arrival_date', '04')->get()->groupBy(function ($val){
        //     return Carbon::parse($val->arrival_date)->format('d');
        // });
        // // });

        // $reservationDate = DB::table('hotels')->whereMonth('reservation_status_date', '04')->get()->groupBy(function ($val){
        //     return Carbon::parse($val->reservation_status_date)->format('d');
        // });


        return Inertia::render('Dashboard',[
            'totalPrice' => $totalPrice,
            'totalBookings' => $totalBookings,
            'canceledBookings' => $canceledBookings,
        ]);
    }

    public function getChartData(Request $request)
    {

        $month = $request->month;
        $month = date('m',strtotime($month));
        $days=cal_days_in_month(CAL_GREGORIAN, $month,2016);

        $bookings = DB::table('hotels')->where('is_canceled',0)->whereMonth('arrival_date', $month)->get()->groupBy(function ($val){
            return Carbon::parse($val->arrival_date)->format('d');
        });

        $data = [];

        for ($i=1; $i <= $days; $i++) {
            if(array_key_exists($i,$bookings->toArray())){
                $data[$i] = $bookings[$i]->count();
            }else{
                $data[$i] = 0;
            } 
        }



        return [
            'days' => array_keys($data),
            'bookings' => array_values($data)
        ];

    }
}
