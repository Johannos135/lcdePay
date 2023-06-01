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
                                                    <a class="btn btn-sm btn-primary badge"
                                                        href="#"
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