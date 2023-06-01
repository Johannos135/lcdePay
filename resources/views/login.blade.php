@extends('layouts.app')

    @section('styles')



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
                                <img src="{{asset('assets/images/brand/logo_lcde.png')}}" class="header-brand-img" width="80px" height="80px" alt="">
                            </div>
                        </div>
                         <form class="login100-form validate-form" method="POST" action="{{ route('login') }}">
                            @csrf
                            <span class="login100-form-title pb-5">
                                Connexion
                            </span>
                            <div class="panel panel-primary">
                                <div class="tab-menu-heading">

                                </div>
                                <div class="panel-body tabs-menu-body p-0 pt-5">
                                    <div class="tab-content">
                                        <div class="tab-pane active" id="tab5">
                                            <div class="wrap-input100 validate-input input-group" data-bs-validate="Un numéro d'abonné valide est requis: AB000547">
                                                <a href="javascript:void(0)" class="input-group-text bg-white text-muted">
                                                    <i class="fa fa-user" aria-hidden="true"></i>
                                                </a>

                                                    <input id="numero_abonne" class="input100 form-control" placeholder="Numéro abonné" type="text" name="numero_abonne" :value="old('numero_abonne')" required autofocus autocomplete="username" />

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

                                                    <button class="login100-form-btn btn-primary">
                                                        {{ __('Se connecter') }}
                                                    </button>
                                                </div>
                                                <div class="text-center pt-3">
                                                    <p class="text-dark mb-0">Vous voulez payer pour un proche?<a href="#" class="text-primary ms-1">Payer sans se connecter</a></p>
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
        <script src="{{asset('assets/js/generate-otp.js')}}"></script>
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
