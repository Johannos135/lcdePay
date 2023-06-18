<?php

use App\Http\Controllers\AbonneController;
use App\Http\Controllers\Api\v1\ApiAbonneController;
use App\Http\Controllers\Api\v1\ApiAbonnementController;
use App\Http\Controllers\Api\v1\ApiFactureController;
use App\Http\Controllers\Api\v1\ApiHomeController;
use App\Http\Controllers\Api\v1\ApiPaiementController;
use App\Http\Controllers\BillController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/abonnements/{numero_abonne}', [ApiAbonnementController::class, 'index']);
Route::post('/login', [ApiAbonneController::class, 'login']);
Route::get('/impayees/{numero_abonne}', [ApiFactureController::class, 'getFactureImpaye']);
Route::middleware('token.auth')->group(function () {
    Route::get('/payees/{numero_abonne}', [ApiFactureController::class, 'getFacturePaye']);
    Route::get('/infoUser/{numero_abonne}', [ApiAbonneController::class, 'getAbonneById']);
    Route::get('/home/{numero_abonne}', [ApiHomeController::class, 'home']);

    Route::prefix('abonnes')->group(function () {
        Route::post('/', [AbonneController::class, 'store']);
    });
    Route::post('paiement', [ApiPaiementController::class, 'paySingleFacture']);
});
