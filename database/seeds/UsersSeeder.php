<?php



use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       $admin = User::create([
           'name' => 'Mostafa Essam',
           'email' => 'admin@ex.com',
           'gender' => 'male',
           'phone' => '01234567810',
           'image' =>null,
           'language' =>'en',
           'email_verified_at' => now(),
           'password' => Hash::make('password'),
           'created_at' => now(),
           'updated_at' => now(),
       ]);
       $admin_role = Role::first();

       $admin->assignRole($admin_role);
       $admin->syncPermissions($admin_role->permissions);

    }
}
