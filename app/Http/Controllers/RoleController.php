<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use function compact;
use function redirect;
use function view;

class RoleController extends Controller
{
    function __construct()
    {
        $this->middleware('permission:Manage Roles', ['index', 'store']);
    }


    public function index(Role $model)
    {
        $permissions = Permission::all();


        $roles = Role::with('permissions')->get();
        $rolesTotal = $roles->count();
        return inertia('Roles/Index',[
            'permissions' => $permissions,
            'rolesTotal' => $rolesTotal,
            'roles' => $roles
        ]);

    }

    public function data(Request $request)
    {

        $roles = Role::query()->with('permissions');

        $roles = $this->searchAndSort($roles,$request,'Roles');

        return [
            "meta" => [
                "page" => $roles->currentPage(),
                "pages" => $roles->lastPage(),
                "perpage" => $roles->perPage(),
                "total" => $roles->total(),
                "sort" => "asc",
                "field" => "Users",
            ],
            "data" => $roles->items()
        ];
    }


    public function create()
    {
        $permissions = Permission::get();
        return view('roles.create', compact('permissions'));
    }


    public function store(Request $request, Role $model)
    {
        $request->validate([
            'name' => ['required','string','max:255'],
            'description' => ['string'],
            'permissions' => ['required']
        ]);
        $newRole =$model->create($request->all());
        $newRole->permissions()->attach($request->permissions);
        return Redirect::route('roles.index');
    }

    public function edit(Role $role)
    {
        $permissions = Permission::all();
        return view('roles.edit', compact('role','permissions'));
    }

    public function update(Request $request, Role $role)
    {
        $request->validate([
            'name' => ['required','string','max:255'],
            'description' => ['string'],
            'permissions' => ['required']
        ]);
        $role->update($request->all());
        $role->permissions()->sync($request->permissions);
        return redirect()->route('roles.index');
    }

    public function destroy(Request $request,Role $role)
    {
        $role->delete();
        $request->session()->put('deleted','Role ('. $role->name. ') Deleted Successfully!');
        return redirect()->route('roles.index');

    }

}
