<?php

namespace App\Http\Controllers;

use App\Models\Facture;
use App\Models\Recu;
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
        $factureId = $request->input('factureId');

        // Retrieve the facture details based on the ID
        $facture = Facture::where('numero_facture', $factureId)->first();

        // Generate the HTML content for the modal body
        $html = '<h6>Facture Details</h6>';
        $html .= '<p>Facture ID: ' . $facture->numero_facture . '</p>';
        // Add more details as needed

        return $html;
    }

    public function paySingleFacture(Request $request)
    {
        // Créer une instance du reçu unique
        $incomingFields = $request->validate(
            ['num_facture' => 'required'],
            ['montant' => 'required'],
            ['telephone' => 'required'],
        );
        $recu = new Recu();
        $recu->num_recu = random_int(10000, 1000000); // Remplacer par le numéro de téléphone
        $recu->numero_compte_momo = $request['telephone']; // Remplacer par le numéro de téléphone
        $recu->operateur = 'MTN CONGO'; // Remplacer par le numéro de téléphone
        $recu->montant_recu = $request['montant']; // Remplacer par le numéro de téléphone
        $recu->transaction_id = 'ABCD' . random_int(1, 1000); // Remplacer par la référence de paiement générée ou fournie
        // Définir d'autres attributs du reçu si nécessaire

        // Enregistrer le reçu dans la base de données
        $recu->save();

        // Associer le reçu à toutes les factures sélectionnées
        $facture = Facture::where('numero_facture', $request['num_facture'])->first();
        $facture->recus()->attach($recu);

        return redirect()->route('abonnement');
    }
}
