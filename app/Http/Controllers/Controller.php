<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Arr;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function numbringTable($array,$sortType)
    {
        if($sortType == 'asc'){
            foreach($array as $key => $item){
                $item->count = $key + 1;
                $item->save();
            }
        }else{
            $i = count($array);
            foreach($array as $key => $item){
                $item->count = $i;
                $item->save();
                $i--;
            }
        }
    }


    public function searchAndSort($model,$request,$pageName)
    {

        $perPage = $request['pagination']['perpage'];
        $page = $request['pagination']['page'];
        $pages = Arr::exists($request['pagination'],'pages')?$request['pagination']['pages']: null;
        $query = $request['query'] ? $request['query']['generalSearch']:null;
        $field = $request['sort']?$request['sort']['field']:null;
        $type = $request['sort']?$request['sort']['sort']:null;
        if ($pages && $pages < $page ) {
            $page = 1;
        }

        if ($query) {
            $model->where('name','like','%'.$query.'%');
        }

        if ($request['sort']) {
            $model->orderby($field, $type);
        }

        if ($query && $request['sort']) {
            $model->where('name','like','%'.$query.'%')->orderby($field, $type);
        }

        return $model->paginate($perPage, ['*'], $pageName, $page);
    }
}
