<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::create('users', function (Blueprint $table) {
            $table->BigIncrements('id');
            $table->string('name');
            $table->string('email')->unique();
            $table->string('gender')->default('male')->nullable();
            $table->string('image')->nullable();
            $table->string('phone')->nullable();
            $table->string('language')->default('en')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password')->default(Hash::make('password'));
            $table->string('active')->default(0);
            $table->integer('count')->default(0);
            $table->boolean('rtl')->default(false);
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
