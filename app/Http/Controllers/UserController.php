<?php

namespace App\Http\Controllers;

use App\Exports\UsersExport;
use App\Http\Requests\PasswordRequest;
use App\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;
use function redirect;

class UserController extends Controller
{

    public function __construct()
    {

    }

    public function index(Request $request, User $user)
    {
        return inertia('Users/Index',[
            'usersTotal' => User::count()
        ]);

    }


    public function allUsers(Request $request)
    {

        $users = User::query()->with('roles');

        $users = $this->searchAndSort($users,$request,'Users');

        return [
            "meta" => [
                "page" => $users->currentPage(),
                "pages" => $users->lastPage(),
                "perpage" => $users->perPage(),
                "total" => $users->total(),
                "sort" => "asc",
                "field" => "Users",
            ],
            "data" => $users->items()
        ];
    }


    public function create()
    {
        $roles = Role::all();
        return inertia('Users/Create', [
            'roles' => $roles
        ]);
    }

    public function show(User $user)
    {
        return inertia('Users/Show', [
            'user' => $user
        ]);
    }

    public function store(Request $request)
    {
        $data = $this->validateFormData($request);
        if ($request->file('image')) {
            $image = $request->file('image');
            $image->storeAs('uploads/users',str_replace(' ','_',$request->name).'.'.$image->extension(),'public');
            $data["image"] = 'storage/uploads/users/' . str_replace(' ','_',$request->name).'.'.$image->extension();
        }
        $user = User::create($data);
        if ($request->role_id) {
            $role_id = $request->role_id;
        } else {
            $role_id = 2; //user role
        }
        $user_role = Role::find($role_id);
        $user->assignRole($user_role);
        $user->syncPermissions($user_role->permissions);
        return redirect()->route('users.index');
    }

    public function edit(Request $request, User $user)
    {
        $roles = Role::all();
        return inertia('Users/Edit', [
            'user' => $user->load('roles'),
            'roles' => $roles
        ]);
    }

    public function update(Request $request, User $user)
    {
        $data = $this->validateFormData($request);
        if ($request->file('image')) {
            $image = $request->file('image');
            $image->storeAs('uploads/users',str_replace(' ','_',$request->name).'.'.$image->extension(),'public');
            File::exists($user->image) ? $this->removeImage($user->image) : null;
            $data["image"] = 'storage/uploads/users/' . str_replace(' ','_',$request->name).'.'.$image->extension();
        } else {
            unset($data['image']);
        }
        $user->update(
            $data
        );
        if ($request->role_id) {
            $user_role = Role::find($request->role_id);
            $user->roles()->detach();
            $user->assignRole($user_role->name);
            $user->syncPermissions($user_role->permissions);
        }
        if (!empty($user->getChanges())) {
            if (auth()->user()->hasRole('admin') && auth()->user()->id !== $user->id) {
                $request->session()->put('edited', 'User Updated Successfully');
                return redirect()->route('users.index');
            }
            if (auth()->user()->id == $user->id) {
                $request->session()->put('edited', 'Your Account Updated Successfully');

                return redirect()->route('users.show', $user);
            }
        } else {
            return redirect()->route('users.index');
        }

    }

    public function destroy(Request $request, User $user): RedirectResponse
    {
        File::exists($user->image) ? $this->removeImage($user->image) : null;
        $user->delete();
        $request->session()->put('deleted', 'User (' . $user->name . ') Deleted Successfully');
        return redirect()->route('users.index');
    }

    public function updatePassword(Request $request, PasswordRequest $passreq)
    {
        $user = User::find($request->id);
        $user->update([
            'password' => Hash::make($request->password)
        ]);
        return redirect()->back();
    }

    public function validateFormData($request)
    {
        $data = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'phone' => 'sometimes',
            'role_id' => 'required',
            'gender' => 'required',
            'image' => 'sometimes'
        ]);
        return $data;
    }

    public function cancel(Request $request)
    {
        return redirect()->route('users.index');
    }

    public function removeImage($img_path)
    {
        if (File::exists($img_path)) {
            File::delete($img_path);
        } else {
            dd('File not found');
        }
    }

    public function export(Request $request)
    {
        switch ($request->type) {
            case 'excel':
                return (new UsersExport)->download('users.xlsx', \Maatwebsite\Excel\Excel::XLSX);
            case 'pdf':
                return (new UsersExport)->download('users.pdf', \Maatwebsite\Excel\Excel::DOMPDF);
            case 'csv':
                return (new UsersExport)->download('users.csv', \Maatwebsite\Excel\Excel::CSV);
        }
    }


}
