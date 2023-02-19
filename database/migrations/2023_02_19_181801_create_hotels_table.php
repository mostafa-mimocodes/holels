<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hotels', function (Blueprint $table) {
            $table->id();
            $table->string('hotel');
            $table->boolean('is_canceled')->default(0);
            $table->timestamp('arrival_date')->nullable();
            $table->integer('stays_in_weekend_nights')->default(0);
            $table->integer('stays_in_week_nights')->default(0);
            $table->integer('adults')->default(0);
            $table->integer('children')->default(0);
            $table->integer('babies')->default(0);
            $table->string('meal')->nullable();
            $table->string('country')->nullable();
            $table->boolean('is_repeated_guest')->default(0);
            $table->char('reserved_room_type')->default('A');
            $table->string('deposit_type')->default('No Deposit');
            $table->string('customer_type')->default('Transient');
            $table->double('price')->default(0);
            $table->string('reservation_status')->default('No-Show');
            $table->timestamp('reservation_status_date')->nullable();
            $table->string('name');
            $table->string('email');
            $table->string('phone_number');
            $table->string('credit_card');
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
        Schema::dropIfExists('hotels');
    }
};
