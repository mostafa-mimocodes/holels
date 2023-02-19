<?php

use App\Http\Controllers\PagesController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\SettingsController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;


Route::group(['middleware' => ['auth','lang']], function () {

    Route::get('/', [PagesController::class,'index'])->name('home');

    //UserController Group

    Route::resource('roles','RoleController')->middleware('can:Manage Roles');

    Route::controller(RoleController::class)->group(function (){
        Route::get('/get-roles-data','data')->name('roles.data');
    });

    //UserController Group

    Route::resource('users', 'UserController');

    Route::controller(UserController::class)->group(function (){
        Route::post('/update-password', 'updatePassword')->name('users.update-password');
        Route::get('/all-users','allUsers')->name('users.all');
        Route::get('/cancel-users','cancel')->name('users.cancel');
        Route::get('/users-export',  'export')->name('users.export');
    });


    Route::resource('settings', 'SettingsController')->only(['edit','update']);

    Route::controller(SettingsController::class)->group(function (){
        Route::post('/settings/images','images')->name('settings.images');
        Route::post('/settings/change-lang','changeLang')->name('settings.change_lang');
    });


});

require __DIR__.'/auth.php';
