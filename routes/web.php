<?php

use App\Http\Controllers\AbonneController;
use App\Http\Controllers\AbonnementController;
use App\Http\Controllers\DashboardController;
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
        [DashboardController::class, 'dashboard']
    )->name('dashboard');
    Route::get(
        '/abonnements',
        [AbonnementController::class, 'index']
    )->name('abonnement');
    Route::get(
        '/impayees',
        [FactureController::class, 'index']
    )->name('facture');
    Route::get(
        '/payees',
        [FactureController::class, 'FacturePaye']
    )->name('facture.payee');
    Route::post(
        '/paiement',
        [FactureController::class, 'paySingleFacture']
    )->name('facture.paiement');
});

Route::get('login', [AbonneController::class, 'showLoginForm'])->name('login');
Route::get('form-sans', [AbonneController::class, 'showFormSans'])->name('sans');
Route::post('form-sans', [FactureController::class, 'getFactureDetails'])->name('fact-det');
Route::post('login', [AbonneController::class, 'login']);
