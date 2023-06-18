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
                        <h4 class="">Information de l'abonné</h4>
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


    @if (session()->has('message'))
        <div class="alert alert-success text-center">{{ session('message') }}</div>
    @endif
    <!-- PAGE-HEADER END -->
    @livewire('dashboard')
@endsection
@livewireScripts
@section('scripts')
    <!-- Select2 js-->
    <script src="{{ asset('assets/plugins/select2/select2.full.min.js') }}"></script>

    <!-- INTERNAL SELECT2 JS -->
    <script src="{{ asset('assets/js/select2.js') }}"></script>

    <!-- DATA TABLE JS-->
    <script src="{{ asset('assets/plugins/datatable/js/jquery.dataTables.min.js') }}"></script>
    <script src="{{ asset('assets/plugins/datatable/js/dataTables.bootstrap5.js') }}"></script>
    <script src="{{ asset('assets/plugins/datatable/js/dataTables.buttons.min.js') }}"></script>
    <script src="{{ asset('assets/plugins/datatable/js/buttons.bootstrap5.min.js') }}"></script>
    <script src="{{ asset('assets/plugins/datatable/js/jszip.min.js') }}"></script>
    <script src="{{ asset('assets/plugins/datatable/pdfmake/pdfmake.min.js') }}"></script>
    <script src="{{ asset('assets/plugins/datatable/pdfmake/vfs_fonts.js') }}"></script>
    <script src="{{ asset('assets/plugins/datatable/js/buttons.html5.min.js') }}"></script>
    <script src="{{ asset('assets/plugins/datatable/js/buttons.print.min.js') }}"></script>
    <!-- visibilité des bouttons -->
    <script src="{{ asset('assets/plugins/datatable/js/buttons.colVis.min.js') }}"></script>
    <script src="{{ asset('assets/plugins/datatable/dataTables.responsive.min.js') }}"></script>
    <script src="{{ asset('assets/plugins/datatable/responsive.bootstrap5.min.js') }}"></script>
    <script src="{{ asset('assets/js/table-data.js') }}"></script>
@endsection