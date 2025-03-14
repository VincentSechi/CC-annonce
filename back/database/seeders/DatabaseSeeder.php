<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        $this->call(RoleSeeder::class);
        $this->call(CategorySeeder::class);
        $this->call(AnnouncementSeeder::class);
        
        $admin = User::create([
            'name' => 'Admin',
            'email' => 'admin@mail.com',
            'password' => Hash::make('password'),
        ]);
        $admin->assignRole('admin');

        $user = User::create([
            'name' => 'User',
            'email' => 'user@mail.com',
            'password' => Hash::make('password'),
        ]);

        $user->assignRole('user');
    }
}
