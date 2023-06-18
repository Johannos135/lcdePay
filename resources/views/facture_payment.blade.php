@extends('layouts.app')

@section('styles')
    <style>
        .login {
            border: 1px solid #41a0e5;
            border-radius: 5px;
        }

        .annuler a {
            font-size: 16px;
            background: -webkit-linear-gradient(#eee, #078e07);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .annuler:hover a {
            font-size: 16px;
            background: -webkit-linear-gradient(#eee, #fff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    </style>
@endsection

@section('class')
    <!-- BACKGROUND-IMAGE -->
    <div class="login-img">
    @endsection

    @section('content')


        <!-- CONTAINER OPEN -->

        <div class="container-login100">
            <div class="wrap-login100 p-6">
                <div class="col-login mx-auto mt-1">
                    <div class="text-center">
                        <img src="{{ asset('assets/images/brand/logo_lcde.png') }}" class="header-brand-img" width="80px"
                            height="80px" alt="">
                    </div>
                    <h4 class="text-center m-2">Information de la facture</h4>
                    <div class="p-2 login">
                        <p><i class="fa fa-user"></i>&nbsp;&nbsp;{{ $facture->abonnement->abonne->nom }}
                            {{ $facture->abonnement->abonne->prenom }}</p>
                        <p><i class="fa fa-file-text-o"></i>&nbsp;&nbsp;{{ $facture->abonnement->num_abonnement }}
                        </p>
                        <p class="text-danger"><i class="fa fa-credit-card"></i>&nbsp;&nbsp;<strong>
                                @if ($facture->recus->count() > 0)
                                    {{ $facture->montant_facture }}
                                @else
                                    0
                                @endif
                                FCFA
                            </strong></p>
                    </div>
                </div>
                <form class="login100-form validate-form" method="POST" action="#">
                    @csrf

                    <div class="panel panel-primary">
                        <div class="tab-menu-heading">

                        </div>
                        <small class="text-danger m-2">
                            @if ($facture->recus->count() > 0)
                                Veuillez rentrer un numéro Mobile Money valide
                            @else
                                <strong>Cher abonné veuillez noter que cete facture a déjà été payée,<br>Merci pour votre
                                    fidélité!!!</strong>
                            @endif
                        </small>
                        <div class="panel-body tabs-menu-body p-0 pt-3">
                            <div class="tab-content">
                                <div class="tab-pane active" id="tab5">
                                    <div class="wrap-input100 login validate-input input-group"
                                        data-bs-validate="Un numéro de téléphone valide est requis: AB000547">
                                        <a href="javascript:void(0)" class="input-group-text bg-white text-muted">
                                            <i class="fa fa-phone" aria-hidden="true"></i>
                                        </a>

                                        <input id="numero_telephone" class="input100 form-control"
                                            @if ($facture->recus->count() == 0) readonly @endif placeholder="Numéro téléphone"
                                            type="text" name="numero_telephone" :value="old('numero_telephone')" required
                                            autofocus autocomplete="numero_telephone" />

                                    </div>
                                    <div>
                                        @if ($errors->any())
                                            <div>

                                                @foreach ($errors->all() as $error)
                                                    <small class="mt-2 text-danger">{{ $error }}</small>
                                                @endforeach

                                            </div>
                                        @endif
                                    </div>
                                    <div class="container-login100-form-btn">

                                        <button @if ($facture->recus->count() == 0) disabled @endif
                                            class="login100-form-btn btn-outline-primary">
                                            {{ __('Procéder au paiement') }}
                                        </button>

                                    </div>

                                    <div class="container-login100-form-btn">

                                        <button type="button" class="annuler login100-form-btn btn-outline-success">
                                            <a href="{{ route('login') }}">{{ __('Annuler') }}</a></button>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                </form>
            </div>
        </div>
        <!-- CONTAINER CLOSED -->
    @endsection

    @section('scripts')
        <!-- GENERATE OTP JS -->
        <script src="{{ asset('assets/js/generate-otp.js') }}"></script>
    @endsection
    {{-- <form method="POST" action="{{ route('login') }}">
    @csrf

    @if ($errors->any())
        <div>
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

    <div>
        <label for="numero_abonne">Numéro d'abonné</label>
        <input type="text" name="numero_abonne" id="numero_abonne" required autofocus>
    </div>

    <div>
        <button type="submit">Se connecter</button>
    </div>
</form> --}}
