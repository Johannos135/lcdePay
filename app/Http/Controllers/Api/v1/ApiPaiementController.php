<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Models\Facture;
use App\Models\Recu;
use Bmatovu\MtnMomo\Exceptions\CollectionRequestException;
use Bmatovu\MtnMomo\Products\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ApiPaiementController extends Controller
{
    public function paySingleFacture(Request $request)
    {
        // Créer une instance du reçu unique
        $rules = [
            'numero_facture' => 'required',
            'montant' => 'required',
            'telephone' => 'required'
        ];

        $validators = Validator::make($request->all(), $rules);

        if ($validators->fails()) {
            return response()->json([
                "success" => false,
                "message" => collect($validators->errors())->flatten()
            ], 400);
        }

        $collection = new Collection();

        $id_trans = 'REF-' . random_int(10000, 1000000);

        $telephone =  $request->telephone;
        $montant = $request->montant;

        try {
            $transaction_id = $collection->requestToPay($id_trans, $telephone, $montant);
            $stat = $collection->getTransactionStatus($transaction_id);
            if ($stat["status"] == "SUCCESSFUL") {
                $recu = new Recu();
                $recu->num_recu = random_int(10000, 1000000); // Remplacer par le numéro de téléphone
                $recu->numero_compte_momo = $request->telephone; // Remplacer par le numéro de téléphone
                $recu->operateur = 'MTN CONGO'; // Remplacer par le numéro de téléphone
                $recu->montant_recu = $request->montant; // Remplacer par le numéro de téléphone
                $recu->transaction_id =  $id_trans; // Remplacer par la référence de paiement générée ou fournie
                // Définir d'autres attributs du reçu si nécessaire

                // Enregistrer le reçu dans la base de données
                $recu->save();

                // Associer le reçu à toutes les factures sélectionnées
                $facture = Facture::where('numero_facture', $request->numero_facture)->first();
                $facture->recus()->attach($recu);

                return response()->json([
                    'success' => true,
                    'message' => "Paiement effectué avec succès",
                    'data' => $facture,
                ], 200);
            } else {
                return response()->json([
                    'success' => false,
                    'message' => 'Paiement echoué!',
                ], 400);
            }
        } catch (CollectionRequestException $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ], 400);
        }
    }
}
