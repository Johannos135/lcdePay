<div>
    <!-- ROW OPEN -->
    <div class="row row-cards">
        <div class="col-lg-12 col-xl-12">
            <div class="input-group mb-5">

                <input type="text" wire:model.debounce.500ms="src_val" class="form-control" placeholder="Recherche...">
                <div class="input-group-text btn btn-primary">
                    <i class="fa fa-search" aria-hidden="true"></i>
                </div>
            </div>
            <div class="card">
                <div class="card-header border-bottom-0 p-4">
                    <h2 class="card-title"></h2>
                    <div class="col-sm-6 col-md-6 col-xl-3">
                        <a class="modal-effect btn btn-success-light d-grid mb-3" data-bs-effect="effect-fall"
                            data-bs-toggle="modal" href="#modaldemo8">Payer</a>
                    </div>
                </div>
                <div class="e-table px-5 pb-5">
                    <div class="table-responsive table-lg">
                        <table id="file-datatable" class="table border-top table-bordered mb-0">
                            <thead>
                                <tr>
                                    <th>N° Facture</th>
                                    <th>Ancien Index</th>
                                    <th>Nouvel Index</th>
                                    <th>N° Abonnement</th>
                                    <th>Période</th>
                                    <th>Volume consommé</th>
                                    <th>Montant</th>
                                    <th class="text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                @if (!empty($datas))
                                    @foreach ($datas as $item)
                                        <tr>
                                            <td class="text-nowrap align-middle">{{ $item->numero_facture }}</td>
                                            <td class="text-nowrap align-middle">{{ $item->ancien_index }}</td>
                                            <td class="text-nowrap align-middle">{{ $item->nouvel_index }}</td>
                                            <td class="text-nowrap align-middle">{{ $item->num_abonnement }}</td>
                                            <td class="text-nowrap align-middle">{{ $item->libelle }}</td>
                                            <td class="text-nowrap align-middle">{{ $item->volume_consomme }}</td>
                                            <td class="text-nowrap align-middle">{{ $item->montant_facture }}</td>
                                            <td class="text-center align-middle">
                                                <div class="btn-group align-top">
                                                    <a class="btn btn-sm btn-primary badge" href="#"
                                                        type="button"><i class="fa fa-info-circle"></i></a>
                                                </div>
                                            </td>
                                        </tr>
                                    @endforeach
                                @endif
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
        <!-- COL-END -->
    </div>
    <!-- ROW CLOSED -->
</div>

<!-- MODAL EFFECTS -->
<div class="modal fade" id="modaldemo8">
    <div class="modal-dialog modal-dialog-centered text-center" role="document">
        <div class="modal-content modal-content-demo">
            <div class="modal-header">
                <h6 class="modal-title">Paiement de facture</h6><button aria-label="Close" class="btn-close"
                    data-bs-dismiss="modal"><span aria-hidden="true">&times;</span></button>
            </div>
            <div class="modal-body">
                <h6>Pour valider le paiement de vôtre facture prière d'entrer un numéro de téléphone valide.</h6>
                <form class="login100-form validate-form">
                    <div class="panel panel-primary">
                        <div class="tab-menu-heading">
                            <div class="tabs-menu1">
                                <!-- Tabs -->
                                <ul class="nav panel-tabs active">
                                    <li class="mx-0"><a href="#tab6" data-bs-toggle="tab">Mobile</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="panel-body tabs-menu-body p-0 pt-5">
                            <div class="tab-content">
                                <div class="tab-pane active" id="tab6">
                                    <div id="mobile-num" class="wrap-input100 validate-input input-group mb-4">
                                        <a href="javascript:void(0)" class="input-group-text bg-white text-muted">
                                            <span>+242</span>
                                        </a>
                                        <input class="input100 form-control" type="mobile"
                                            placeholder="Numéro de téléphone">
                                    </div>
                                    <span>Note : Assurez vous de disposer des fonds suffisants pour valider ce
                                        paiement.</span>
                                    <div class="modal-footer">
                                        <button class="btn btn-primary">Valider le paiement</button> <button
                                            class="btn btn-light" data-bs-dismiss="modal">Fermer</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
            {{-- <div class="modal-footer">
                <button class="btn btn-primary">Valider le paiement</button> <button class="btn btn-light"
                    data-bs-dismiss="modal">Fermer</button>
            </div> --}}
        </div>
    </div>
</div>
