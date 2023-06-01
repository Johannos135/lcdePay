<?php

use App\Http\Controllers\AbonneController;
use App\Http\Controllers\AbonnementController;
use App\Http\Controllers\FactureController;
use App\Http\Livewire\Dashboard;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::middleware('subscriber')->group(function () {
    Route::get(
        '/',
        [Dashboard::class, 'render']
    )->name('dashboard');
    Route::get(
        '/abonnements',
        [AbonnementController::class, 'index']
    )->name('abonnement');
    Route::get(
        '/impayees',
        [FactureController::class, 'index']
    )->name('facture');
});

Route::get('login', [AbonneController::class, 'showLoginForm'])->name('login');
Route::post('login', [AbonneController::class, 'login']);
