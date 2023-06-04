<?php

namespace App\Http\Livewire;

use App\Models\Facture;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class ListePaiements extends Component
{
    public function render()
    {
        $num_abonne = Auth::guard('lcde')->user()->numero_abonne;
        $datas = Facture::join('facture_recus', 'factures.numero_facture', '=', 'facture_recus.numero_facture')
            ->join('recus', 'facture_recus.num_recu', '=', 'recus.num_recu')
            ->join('abonnements', 'factures.num_abonnement', '=', 'abonnements.num_abonnement')
            ->where('abonnements.num_abonne', $num_abonne)
            ->select('factures.*', 'recus.*')
            ->get();
        return view('livewire.liste-paiements', compact('datas'));
    }
}
