<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Models\Abonne;
use App\Models\Facture;
use Exception;
use Illuminate\Http\Request;

class ApiHomeController extends Controller
{
    public function home($numeroAbonne)
    {
        // Effectuez les vérifications nécessaires pour valider le numéro d'abonné dans votre base de données

        try {
            //code...
            $user = Abonne::where('numero_abonne', $numeroAbonne)->first();
            $sum = Facture::join('abonnements', 'factures.num_abonnement', '=', 'abonnements.num_abonnement')
                ->where('abonnements.num_abonne', $numeroAbonne)
                ->whereNotIn('factures.numero_facture', function ($query) {
                    $query->select('numero_facture')
                        ->from('facture_recus');
                })
                ->sum('factures.montant_facture');

            if (!$user) {
                return response()->json(['message' => 'Numéro d\'abonné invalide'], 401);
            }


            return response()->json([
                'success' => true,
                'message' => "Information personnelle de l'abonné",
                'data' => $user,
                'total' => $sum,
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => "Un problème est survenu lors de la récupération \ndes informations de l'abonné",
            ], 400);
        }
    }
}
