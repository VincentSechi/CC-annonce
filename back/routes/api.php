<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Admin\UserController;
use Spatie\Permission\Middlewares\RoleMiddleware;
use App\Http\Controllers\AnnonceController;
use App\Http\Controllers\CategoryController;


// ANNONCES

Route::get('/annonces', [AnnonceController::class, 'index']);
Route::get('/annonces/{id}', [AnnonceController::class, 'show']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/annonces', [AnnonceController::class, 'store']);
    Route::put('/annonces/{id}', [AnnonceController::class, 'update']);
    Route::delete('/annonces/{id}', [AnnonceController::class, 'destroy']);
});

// CATEGORIES

Route::get('/categories', [CategoryController::class, 'index']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/categories', [CategoryController::class, 'store']);
    Route::put('/categories/{id}', [CategoryController::class, 'update']);
    Route::delete('/categories/{id}', [CategoryController::class, 'destroy']);
});

//LOGIN REGISTER
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');