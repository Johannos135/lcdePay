<?php

namespace App\Http\Controllers;

use App\Models\Facture;
use App\Models\Recu;
use Bmatovu\MtnMomo\Exceptions\CollectionRequestException;
use Bmatovu\MtnMomo\Products\Collection;
use Illuminate\Http\Request;

class FactureController extends Controller
{
    //
    public function index()
    {
        return view('factures');
    }

    public function FacturePaye()
    {
        return view('paiements');
    }

    public function getFactureDetails(Request $request)
    {
        $factureId = $request->input('numero_facture');

        // Retrieve the facture details based on the ID
        $facture = Facture::with(['abonnement'])->where('numero_facture', $factureId)->first();

        if (!$facture) {
            session()->flash('failed', 'Facture non trouvée!');
            return redirect()->back();
        }

        return view('facture_payment', compact('facture'));
    }

    public function paySingleFacture(Request $request)
    {
        // Créer une instance du reçu unique
        $incomingFields = $request->validate(
            ['num_facture' => 'required'],
            ['montant' => 'required'],
            ['telephone' => 'required'],
        );

        $collection = new Collection();

        $id_trans = 'REF-' . random_int(10000, 1000000);

        try {
            $transaction_id = $collection->requestToPay($id_trans, $request->telephone, $request->montant);
            $stat = $collection->getTransactionStatus($transaction_id);
            if ($stat["status"] == "SUCCESSFUL") {
                $recu = new Recu();
                $recu->num_recu = random_int(10000, 1000000); // Remplacer par le numéro de téléphone
                $recu->numero_compte_momo = $request['telephone']; // Remplacer par le numéro de téléphone
                $recu->operateur = 'MTN CONGO'; // Remplacer par le numéro de téléphone
                $recu->montant_recu = $request['montant']; // Remplacer par le numéro de téléphone
                $recu->transaction_id =  $id_trans; // Remplacer par la référence de paiement générée ou fournie
                // Définir d'autres attributs du reçu si nécessaire

                // Enregistrer le reçu dans la base de données
                $recu->save();

                // Associer le reçu à toutes les factures sélectionnées
                $facture = Facture::where('numero_facture', $request['num_facture'])->first();
                $facture->recus()->attach($recu);

                session()->flash('success', 'Paiement effectué avec succès!');
                return redirect()->back();
            } else {
                session()->flash('failed', 'Paiement echoué!');
                return redirect()->back();
            }
        } catch (CollectionRequestException $e) {
            session()->flash('failed', 'Impossible de valider ce paiement!');
            return redirect()->back();
        }
    }
}
