<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Models\Facture;
use Exception;
use Illuminate\Http\Request;

class ApiFactureController extends Controller
{
    public function getFactureImpaye($numeroAbonne)
    {
        //code...
        try {
            $datas = Facture::join('abonnements', 'factures.num_abonnement', '=', 'abonnements.num_abonnement')
                ->join('periode_facturations', 'factures.code_periode', '=', 'periode_facturations.code_periode')->where('abonnements.num_abonne', $numeroAbonne)
                ->whereNotIn('factures.numero_facture', function ($query) {
                    $query->select(['numero_facture'])
                        ->from('facture_recus');
                })
                ->get();


            return response()->json([
                'success' => true,
                'message' => "Liste des factures impayées",
                'data' => $datas,
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => "Un problème est survenu lors de la récupération \ndes factures impayées",
            ], 400);
        }
    }

    public function getFacturePaye($numeroAbonne)
    {
        try {
            $facturesPayees = Facture::join('facture_recus', 'factures.numero_facture', '=', 'facture_recus.numero_facture')
                ->join('recus', 'facture_recus.num_recu', '=', 'recus.num_recu')
                ->join('abonnements', 'factures.num_abonnement', '=', 'abonnements.num_abonnement')
                ->where('abonnements.num_abonne', $numeroAbonne)
                ->select('factures.*', 'recus.*')
                ->get();


            return response()->json([
                'success' => true,
                'message' => "Liste des factures payées",
                'data' => $facturesPayees,
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => "Un problème est survenu lors de la récupération \ndes factures payées",
            ], 400);
        }
    }
}
