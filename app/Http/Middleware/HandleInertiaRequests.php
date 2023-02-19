<?php

namespace App\Http\Middleware;

use App\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request)
    {
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => Auth::user()?->load('roles'),
            ],
            'ziggy' => function () {
                return (new Ziggy)->toArray();
            },
            'flash' => [
                'edited' => fn () => $request->session()->get('edited'),
                'deleted' => fn () => $request->session()->get('deleted')
            ],
            'settings' => fn () => Setting::first(),
            'locale' => fn () => App::getLocale(),
        ]);
    }
}
