@extends('layouts.custom-app')


@section('content')
<!-- PAGE-HEADER -->
<div class="page-header m-3">
    <h1 class="page-title">Dashboard</h1>
    <div>
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="javascript:void(0)">Dashboard</a></li>
        </ol>
    </div>
</div>
<!-- ROW-1 -->
<div class="row mt-4">
    <div class="col-lg-12 col-md-12 col-sm-12 col-xl-12">
        <div class="row">
            <div class="col-lg-5 col-md-4 col-sm-12 col-xl-5">
                <div class="card overflow-hidden">
                    <div class="card-body">
                        <div class="d-flex">
                            <div class="mt-2 p-1">
                                <h4 class="">Vous devez au total</h4>
                                <h1 class="mb-2 number-font text-danger"><i class="fa fa-credit-card"></i>&nbsp;&nbsp; {{$sum}} FCFA</h1>
                            </div>
                        </div>
                        <span class="text-muted fs-12"><span class="text-secondary"><i class="fe fe-arrow-up-circle"></i> Total des impayés</span>
                        </span>
                    </div>
                </div>
            </div>
            <div class="col-lg-7 col-md-7 col-sm-12 col-xl-7">
                <div class="card overflow-hidden">
                    <div class="card-body">
                        <h4 class="">Information du client</h4>
                        <div class="d-flex">
                            <h2 class="m-2 h1"><i class="fe fe-user"></i></h2>
                            <div class="m-2 mr-2">
                                <ul>
                                    <li>N° Client: {{auth()->guard('lcde')->user()->numero_abonne}}</li>
                                    <li>Téléphone: {{auth()->guard('lcde')->user()->telephone}}</li>
                                </ul>
                            </div><br>
                            <div class="m-2">
                                <ul class="text-bold">
                                    <li>Nom: {{auth()->guard('lcde')->user()->nom}}</li>
                                    <li>Prénom: {{auth()->guard('lcde')->user()->prenom}}</li>
                                </ul>
                            </div>
                        </div>
                        <span class="text-muted fs-12"><span class="text-pink"><i class="fe fe-arrow-up-circle text-pink"></i>Information du client</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>



<div class="card">
    <div class="card-header border-bottom-0 p-4">
        <h1 class="card-title">Factures récemment payées</h1>
    </div>
    <div class="e-table px-5 pb-5">
        <div class="table-responsive table-lg">
            <table id="file-datatable" class="table border-top table-bordered mb-0">
                <thead>
                    <tr>
                        <th>Numéro facture</th>
                        <th>Montant payé</th>
                        <th>Numéro momo</th>
                        <th>Date de paiement</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="text-nowrap align-middle">XXXX XXXXXX XXXXXX</td>
                        <td class="text-nowrap align-middle">12 750 FCFA</td>
                        <td class="text-nowrap align-middle">064754373</td>
                        <td class="text-nowrap align-middle">
                            05/05/2023

                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    </div>
</div>
<!-- ROW-1 END -->
@endsection
@livewireScripts
