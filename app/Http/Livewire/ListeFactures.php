<?php

namespace App\Http\Livewire;

use App\Models\Facture;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class ListeFactures extends Component
{
    public function render()
    {
        $num_abonne = Auth::guard('lcde')->user()->numero_abonne;
        $datas = Facture::join('abonnements', 'factures.num_abonnement', '=', 'abonnements.num_abonnement')
            ->join('periode_facturations', 'factures.code_periode', '=', 'periode_facturations.code_periode')->where('abonnements.num_abonne', $num_abonne)
            ->whereNotIn('factures.numero_facture', function ($query) {
                $query->select(['numero_facture'])
                    ->from('facture_recus');
            })
            ->get();
        return view('livewire.liste-factures', compact('datas'));
    }
}
