<?php

namespace App\Http\Controllers;

use App\Models\Annonce;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AnnonceController extends Controller
{
    public function index()
    {
        $annonces = Annonce::with('category')
            ->get()
            ->map(function ($annonce) {
                return [
                    'id' => $annonce->id,
                    'title' => $annonce->title,
                    'description' => $annonce->description,
                    'price' => $annonce->price,
                    'user_id' => $annonce->user_id,
                    'category_id' => $annonce->category_id,
                    'created_at' => $annonce->created_at,
                    'updated_at' => $annonce->updated_at,
                    'category_name' => $annonce->category->name ?? null,
                    'image_url' => $annonce->image ? asset('storage/' . $annonce->image) : null, // Ajoute l'URL de l'image
                ];
            });

        return response()->json($annonces);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric',
            'category_id' => 'required|exists:categories,id',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $imagePath = null;

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('annonces', 'public'); 
        }

        $annonce = Annonce::create([
            'title' => $request->title,
            'description' => $request->description,
            'price' => $request->price,
            'user_id' => $request->user_id,
            'category_id' => $request->category_id,
            'image' => $imagePath, 
        ]);

        return response()->json($annonce, 201);
    }

    public function show($id)
    {
        $annonce = Annonce::with(['user', 'category'])->findOrFail($id);
        return response()->json($annonce);
    }

    public function update(Request $request, $id)
    {
        $annonce = Annonce::findOrFail($id);

        if (Auth::id() !== $annonce->user_id) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        $annonce->update($request->only(['title', 'description', 'price', 'category_id']));

        return response()->json($annonce);
    }

    public function destroy($id)
    {
        $annonce = Annonce::findOrFail($id);

        if (Auth::id() !== $annonce->user_id) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        $annonce->delete();
        return response()->json(['message' => 'Annonce supprimée']);
    }
}
