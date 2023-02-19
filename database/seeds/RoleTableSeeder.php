<?php



use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleTableSeeder extends Seeder {

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Permission::create(['name' => 'Manage Users']);
        Permission::create(['name' => 'Manage Roles']);
        Permission::create(['name' => 'Manage Settings']);

        Role:: create(['name' => 'admin' ,'description'=>'This role is used for managing system'])->givePermissionTo(Permission::all());
        Role:: create(['name' => 'user' ,'description'=>'System Users'])->givePermissionTo(Permission::find(3));

    }

}
