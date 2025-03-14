<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Annonce;
use App\Models\Category;
use Faker\Factory as Faker;

class AnnouncementSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        // Exemple de catégories
        $categories = Category::all();

        foreach ($categories as $category) {
            for ($i = 0; $i < 3; $i++) {
                // Définir manuellement le chemin de l'image
                $imagePath = 'annonces/hollowknight-slider2.jpg';  // Ou n'importe quel autre chemin valide

                // Créer des annonces
                Annonce::create([
                    'title' => 'Titre de l\'annonce ' . ($i + 1),
                    'description' => 'Description de l\'annonce ' . ($i + 1),
                    'price' => rand(10, 500),
                    'user_id' => 1,  // Assure-toi que cet utilisateur existe dans la base de données
                    'category_id' => $category->id,
                    'image' => $imagePath
                ]);
            }
        }
    }
}
