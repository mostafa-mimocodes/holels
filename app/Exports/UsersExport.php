<?php

namespace App\Exports;

use App\User;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromCollection;
use Illuminate\Contracts\Support\Responsable;
use Maatwebsite\Excel\Excel;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithColumnFormatting;
use Maatwebsite\Excel\Concerns\WithMapping;
use PhpOffice\PhpSpreadsheet\Style\NumberFormat;
use PhpOffice\PhpSpreadsheet\Shared\Date;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithStyles;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use Maatwebsite\Excel\Concerns\WithHeadingRow;


class UsersExport implements FromCollection, Responsable, ShouldAutoSize,WithColumnFormatting, WithMapping,WithHeadings,WithStyles,WithHeadingRow

{
    use Exportable;

    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return User::all();
    }

    public function columnFormats(): array
    {
        // TODO: Implement columnFormats() method.
        return [
            'D' => NumberFormat::FORMAT_DATE_DDMMYYYY,
        ];
    }

    public function map($row): array
    {
        // TODO: Implement map() method.
        return [
            $row->name,
            $row->email,
            $row->gender,
            Date::dateTimeToExcel($row->created_at),
        ];
    }

    public function headings(): array
    {
        // TODO: Implement headings() method.
        return ["Name", "Email", "Gender","Created At"];
    }

    public function styles(Worksheet $sheet)
    {
        // TODO: Implement styles() method.
        return [
            1    => ['font' => ['bold' => true]],
        ];
    }
}
