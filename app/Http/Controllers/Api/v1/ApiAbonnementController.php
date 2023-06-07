<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Models\Abonnement;
use Exception;
use Illuminate\Http\Request;

class ApiAbonnementController extends Controller
{
    public function index($numeroAbonne)
    {

        try {
            //code...

            $datas =  Abonnement::with(['categorie', 'rythmeFacturation', 'agence', 'pointLivraison'])->where('num_abonne', $numeroAbonne)->get();


            return response()->json([
                'success' => true,
                'message' => "Information sur l'abonnement",
                'data' => $datas
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => "Un problème est survenu lors de la récupération \ndes informations de l'abonnement",
            ], 400);
        }
    }
}
