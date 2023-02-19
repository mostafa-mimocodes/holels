<?php

namespace App\Http\Controllers;

use App\Http\Requests\SettingRequest;
use App\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Session;

class SettingsController extends Controller
{


    public function edit(Setting $setting)
    {
        return  inertia('Settings/Edit',[
            'setting' => $setting
        ]);
    }

    public function update(SettingRequest $request, Setting $setting)
    {

        $request->mail_driver ? $setting->mail_driver = $request->mail_driver:null;
        $request->mail_host ? $setting->mail_host = $request->mail_host:null;
        $request->mail_port ? $setting->mail_port = $request->mail_port:null;
        $request->mail_username ? $setting->mail_username = $request->mail_username:null;
        $request->mail_password ? $setting->mail_password = $request->mail_password:null;
        $request->mail_encryption ? $setting->mail_encryption = $request->mail_encryption:null;
        $request->mail_from_name ? $setting->mail_from_name = $request->mail_from_name:null;

        $setting->save();

        return redirect()->route('settings.edit',$setting);
    }

    public function images(Request $request)
    {

        $setting = Setting::findOrFail(1);

        if ($request->logo){
            $request->logo->storeAs('uploads/logos','app-logo-'.substr($request->logo->hashname(),0,3).'.'.$request->logo->extension(),'public');
            $setting->logo_img = '/storage/uploads/logos/app-logo-'.substr($request->logo->hashname(),0,3).'.'.$request->logo->extension();
        }

        if ($request->favicon){
            $request->favicon->storeAs('uploads/favicons','app_favicon.'.$request->favicon->extension(),'public');
            $setting->favicon = '/storage/uploads/favicons/app_favicon.'.$request->favicon->extension();
        }

        $setting->save();

        return redirect()->route('settings.edit',$setting);
    }

    public function changeLang(Request $request)
    {

        if($request->lang == 'ar'){
            Session::put(['rtl' => true]);

        }else{
            if(Session::has('rtl')){
                Session::remove('rtl');
            }
        }
        Session::put('appLocale',$request->lang);
        return redirect()->back();
    }

}
