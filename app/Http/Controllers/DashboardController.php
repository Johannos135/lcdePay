<?php

namespace App\Http\Controllers;

use App\Models\Facture;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    private $module_path = 'livewire.';

    public function dashboard()
    {
        $num_abonne = Auth::guard('lcde')->user()->numero_abonne;
        $sum = Facture::join('abonnements', 'factures.num_abonnement', '=', 'abonnements.num_abonnement')
            ->where('abonnements.num_abonne', $num_abonne)
            ->whereNotIn('factures.numero_facture', function ($query) {
                $query->select('numero_facture')
                    ->from('facture_recus');
            })
            ->sum('factures.montant_facture');
        return view('welcome', compact('sum'));
    }
}
