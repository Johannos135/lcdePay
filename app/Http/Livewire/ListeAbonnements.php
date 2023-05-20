<?php

namespace App\Http\Livewire;

use App\Models\Abonnement;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;
use Livewire\WithPagination;

class ListeAbonnements extends Component
{
    use WithPagination;

    public $src_val;

    //afficher la vue du composant
    public function render()
    {
        $num_abonne = Auth::guard('lcde')->user()->numero_abonne;
        return view('livewire.liste-abonnements', ['datas' => Abonnement::with(['categorie', 'direction', 'agence', 'secteur'])->where('num_abonne', $num_abonne)->orWhere('num_abonnement', 'LIKE', "%{$this->src_val}%")->paginate(10)]);
    }
}
