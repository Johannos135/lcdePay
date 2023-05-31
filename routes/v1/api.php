<?php

use App\Http\Controllers\AbonneController;
use App\Http\Controllers\Api\v1\ApiAbonneController;
use App\Http\Controllers\Api\v1\ApiHomeController;
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

Route::post('/login', [ApiAbonneController::class, 'login']);

Route::middleware('token.auth')->group(function () {
    Route::get('/infoUser/{numero_abonne}', [ApiAbonneController::class, 'getAbonneById']);
    Route::get('/home/{numero_abonne}', [ApiHomeController::class, 'home']);
    Route::prefix('abonnes')->group(function () {
        Route::post('/', [AbonneController::class, 'store']);
    });
});

Route::prefix('paiement')->group(function () {
    Route::post('/', [BillController::class, 'paiement']);
});
