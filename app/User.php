<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use Notifiable;
    use HasRoles;
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'image', 'gender', 'language', 'phone',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];


    /**
     * Get the path to the profile picture
     *
     * @return string
     */
    public function profilePicture(): string
    {
        if ($this->image) {
            return "storage/uploads/users/{$this->image}";
        }

        if (!empty($this->gender) && $this->gender == 'male')
            return asset('img'). '/defaults/default-avatar-male.svg';
        if (!empty($this->gender) && $this->gender == 'female')
            return asset('img'). '/defaults/default-avatar-female.svg';

        return 'http://i.pravatar.cc/200';

    }

    public function scopeWhenRoleId($query, $roleId)
    {
        return $query->when($roleId, function ($q) use ($roleId) {

            return $q->whereHas('roles', function ($qu) use ($roleId) {

                return $qu->where('id', $roleId);

            });

        })->get();

    }

}
