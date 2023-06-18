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
                </div>
                <form class="login100-form validate-form" method="POST" action="{{ route('fact-det') }}">
                    @csrf

                    <div class="panel panel-primary">
                        <div class="tab-menu-heading">

                        </div>
                        <div class="panel-body tabs-menu-body p-0 pt-5">
                            <div class="tab-content">
                                <div class="tab-pane active" id="tab5">
                                    <div class="wrap-input100 login validate-input input-group"
                                        data-bs-validate="Un numéro d'abonné valide est requis: AB000547">
                                        <a href="javascript:void(0)" class="input-group-text bg-white text-muted">
                                            <i class="fa fa-user" aria-hidden="true"></i>
                                        </a>

                                        <input id="numero_facture" class="input100 form-control"
                                            placeholder="Numéro facture" type="text" name="numero_facture"
                                            :value="old('numero_fature')" required autofocus
                                            autocomplete="numero_facture" />

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

                                        <button class="login100-form-btn btn-outline-primary">
                                            {{ __('Suivant') }}
                                        </button>
                                    </div>
                                    <div class="container-login100-form-btn">

                                        <button type="button" class="annuler login100-form-btn btn-outline-success">
                                            <a href="{{ route('login') }}">{{ __('Précédent') }}</a></button>
                                    </div>

                                    <div class="text-center pt-3">
                                        <p class="text-dark mb-0">Vous êtes un administrateur?<a href="#"
                                                class="text-primary ms-1">Admin</a></p>
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
        <script src="{{ asset('assets/plugins/sweet-alert/sweetalert.min.js') }}"></script>
        <script>
            @if ($message = session('failed'))
                $(document).ready(function() {
                    $('body').removeClass('timer-alert'),
                        swal(
                            'Erreur',
                            '{{ $message }}',
                            'error',
                        );
                });
            @endif
        </script>
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
