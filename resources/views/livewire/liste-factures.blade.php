<div>
    <!-- ROW OPEN -->
    <div class="row row-cards">
        <div class="col-lg-12 col-xl-12">
            <div class="card">
                <div class="card-header border-bottom-0 p-4">
                    <h2 class="card-title"></h2>
                    <div class="col-sm-6 col-md-6 col-xl-3">
            
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
                                        <tr data-facture-id="{{ $item->numero_facture }}">
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
                                                        <a id="datatable" class="modal-effect btn btn-sm btn-secondary badge" data-bs-effect="effect-fall"
                            data-bs-toggle="modal" href="#modaldemo8-{{$item->numero_facture}}"  type="button"><i class="fa fa-money"></i></a>
                                                </div>
                                            </td>
                                        </tr>
                                        <!-- MODAL EFFECTS -->
<div class="modal fade" id="modaldemo8-{{$item->numero_facture}}">
    <div class="modal-dialog modal-dialog-centered text-center" role="document">
        <div class="modal-content modal-content-demo">
            <div class="modal-header">
                <h6 class="modal-title">Paiement de facture</h6><button aria-label="Close" class="btn-close"
                    data-bs-dismiss="modal"><span aria-hidden="true">&times;</span></button>
            </div>
            <div class="modal-body">
                <h6>Pour valider le paiement de vôtre facture prière d'entrer un numéro de téléphone valide.</h6>
                <h5>Facture N° <span class="text-danger">{{ $item->numero_facture }}</span></h5>
                <form class="login100-form validate-form" action="{{route('facture.paiement')}}" method="POST">
                    @csrf
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
                                    <input class="input100 form-control d-none" type="text" name="num_facture" value="{{$item->numero_facture}}"
                                            placeholder="Numéro facture">
                                    <input class="input100 form-control d-none" type="number" name="montant" value="{{$item->montant_facture}}"
                                            placeholder="Numéro facture">
                                    <div id="mobile-num" class="wrap-input100 validate-input input-group mb-4">
                                        <a href="javascript:void(0)" class="input-group-text bg-white text-muted">
                                            <span>+242</span>
                                        </a>
                                        <input class="input100 form-control" type="mobile" name="telephone"
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



