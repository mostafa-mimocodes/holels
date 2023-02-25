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

        if($request->chart == 'bar'){
            $month = $request->month;
            $month = date('m',strtotime($month));
            $days=cal_days_in_month(CAL_GREGORIAN, $month,2016);
            
            
            $bookings = DB::table('hotels')->whereMonth('reservation_status_date', $month)->get()->groupBy(function ($val){
                return Carbon::parse($val->reservation_status_date)->format('d');
            })->map->count()->toArray();
    
    
            $data = [];
    
            for ($i=1; $i < $days; $i++) {
                $key = ''; 
                if($i<10){
                    $key = '0'.$i;
                }else{
                    $key = ''.$i;
                }
                if(array_key_exists($key,$bookings)){
                    $data[$key] = $bookings[$key];
                }else{
                    $data[$key] = 0;
                }
            }
    
    
    
            return [
                'days' => array_keys($data),
                'bookings' => array_values($data)
            ];
        }


        if($request->chart == 'pie'){
            $from = date($request->from);
            $to = date($request->to);
            $bookings = Hotel::whereBetween('reservation_status_date', [$from, $to])->get()->groupBy('reservation_status')->map->count()->toArray();
            ksort($bookings);
            return [
                'status' => array_keys($bookings),
                'bookings' => array_values($bookings),
            ];

        }

        if($request->chart == 'cluster'){
            $from = date($request->from);
            $to = date($request->to);

            $bookings = Hotel::whereBetween('reservation_status_date', [$from, $to]);
            $data = [
                [
                    'name' => 'adults',
                    'data' =>[$bookings->sum('adults')]
                ],
                [
                    'name' => 'children',
                    'data' =>[$bookings->sum('children')]
                ],
                [
                    'name' => 'babies',
                    'data' =>[$bookings->sum('babies')]
                ],
            ];
            return $data;
        }

    }
}
