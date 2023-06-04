<div class="card">
    <div class="card-header border-bottom-0 p-4">
        <h1 class="card-title">Factures récemment payées</h1>
    </div>
    <div class="e-table px-5 pb-5">
        <div class="table-responsive table-lg">
            <table class="table border-top table-bordered mb-0">
                <thead>
                    <tr>
                        <th>N° Facture</th>
                        <th>N° Reçu</th>
                        <th>Numéro Momo</th>
                        <th>ID de transaction</th>
                        <th>N° Abonnement</th>
                        <th>Montant Reçu</th>
                        <th>Date paiement</th>
                    </tr>
                </thead>
                <tbody>
                    @if (!empty($datas))
                        @foreach ($datas as $item)
                            <tr>
                                <td class="text-nowrap align-middle">{{ $item->numero_facture }}</td>
                                <td class="text-nowrap align-middle">{{ $item->num_recu }}</td>
                                <td class="text-nowrap align-middle">{{ $item->numero_compte_momo }}</td>
                                <td class="text-nowrap align-middle">{{ $item->transaction_id }}</td>
                                <td class="text-nowrap align-middle">{{ $item->num_abonnement }}</td>
                                <td class="text-nowrap align-middle">{{ $item->montant_recu }} FCFA</td>
                                <td class="text-nowrap align-middle">{{ $item->created_at }}</td>
                    </tr>
@endforeach
@endif
                </tbody>
            </table>
        </div>
    </div>
</div>
