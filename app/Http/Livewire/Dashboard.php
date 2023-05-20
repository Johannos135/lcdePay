<?php

namespace App\Http\Livewire;

use App\Models\Facture;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class Dashboard extends Component
{
    public function render()
    {
        $num_abonne = Auth::guard('lcde')->user()->numero_abonne;
        $sum = Facture::join('abonnements', 'factures.num_abonnement', '=', 'abonnements.num_abonnement')
            ->where('abonnements.num_abonne', $num_abonne)
            ->whereNotIn('factures.numero_facture', function ($query) {
                $query->select('numero_facture')
                    ->from('facture_recus');
            })
            ->sum('factures.montant_facture');
        return view('livewire.dashboard', compact('sum'));
    }
}
