<?php

namespace App\Imports;

use App\Hotel;
use Carbon\Carbon;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class ImportHotel implements ToModel,WithHeadingRow
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        $month = Carbon::parse($row['arrival_date_month'])->month;
        return new Hotel([
            'hotel'=>$row['hotel'],
            'is_canceled'=>(int) $row['is_canceled'],
            'arrival_date'=> Carbon::create($row['arrival_date_year'],$month,$row['arrival_date_day_of_month']),
            'stays_in_weekend_nights'=>$row['stays_in_weekend_nights'],
            'stays_in_week_nights'=>$row['stays_in_week_nights'],
            'adults'=>(int) $row['adults'],
            'children'=>(int) $row['children'],
            'babies'=>(int) $row['babies'],
            'meal'=>$row['meal'],
            'country'=>$row['country'],
            'is_repeated_guest'=>(int) $row['is_repeated_guest'],
            'reserved_room_type'=>$row['reserved_room_type'],
            'deposit_type'=>$row['deposit_type'],
            'customer_type'=>$row['customer_type'],
            'price'=>sprintf("%.2f", $row['price']),
            'reservation_status'=>$row['reservation_status'],
            'reservation_status_date'=>Carbon::createFromFormat('Y-m-d',$row['reservation_status_date']),
            'name'=>$row['name'],
            'email'=>$row['email'],
            'phone_number'=>$row['phone_number'],
            'credit_card'=>$row['credit_card'],
        ]);
    }
}
