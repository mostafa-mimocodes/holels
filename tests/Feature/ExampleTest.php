<?php

namespace Tests\Feature;

use Database\Seeders\RoleTableSeeder;
use Database\Seeders\SettingSeeder;
use Database\Seeders\UsersSeeder;
use DatabaseSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testBasicTest()
    {
        $this->seed(RoleTableSeeder::class);
        $this->seed(UsersSeeder::class);
        $this->seed(SettingSeeder::class);

        $response = $this->get('/');

        $response->assertStatus(200);
    }
}
