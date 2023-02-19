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
           'email' => 'admin@mimocodes.com',
           'gender' => 'male',
           'phone' => '012345678',
           'image' =>null,
           'language' =>'en',
           'email_verified_at' => now(),
           'password' => Hash::make('password'),
           'created_at' => now(),
           'updated_at' => now(),
       ]);
       $joe = User::create([
           'name' => 'Youssef Belal',
           'email' => 'joebelal7@gmail.com',
           'gender' => 'male',
           'phone' => '012345678',
           'image' =>null,
           'language' =>'en',
           'email_verified_at' => now(),
           'password' => Hash::make('password'),
           'created_at' => now(),
           'updated_at' => now(),
       ]);
       $admin_role = Role::first();
       $user_role = Role::find(2);

       $admin->assignRole($admin_role);
       $admin->syncPermissions($admin_role->permissions);

        $joe->assignRole($admin_role);
        $joe->syncPermissions($admin_role->permissions);

        factory(App\User::class , 28)->create();

        $normalUsers = User::whereNotIn('id',[1,2])->get();

        foreach ($normalUsers as $ind => $user){
            if($ind <= 24){
                if(File::exists('public/media/users/300_'. $ind + 1 .'.jpg')){
                    $user->update(['image'=> 'media/users/300_' . $ind + 1 .'.jpg']);
                }
            }
            $user->assignRole($user_role);
            $user->syncPermissions($user_role->permissions);
        }



    }
}
