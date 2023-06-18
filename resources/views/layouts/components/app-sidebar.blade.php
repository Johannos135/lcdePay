            <!--app-sidebar-->
            <div class="sticky">
                <div class="app-sidebar__overlay" data-bs-toggle="sidebar"></div>
                <div class="app-sidebar">
                    <div class="side-header">
                        <a class="header-brand1" href="{{url('/')}}">
                            <img src="../assets/images/brand/logo_lcde.png" class="header-brand-img desktop-logo" width="80px" height="70px" alt="logo">
                            <img src="../assets/images/brand/logo_lcde.png" class="header-brand-img toggle-logo" width="80px" height="70px" alt="logo">
                            <img src="../assets/images/brand/logo_lcde.png" class="header-brand-img light-logo" width="80px" height="70px" alt="logo">
                            <img src="../assets/images/brand/logo_lcde-3.png" class="header-brand-img light-logo1" width="80px" height="70px" alt="logo">
                        </a>
                        <!-- LOGO -->
                    </div>
                    <div class="main-sidemenu">
                        <div class="slide-left disabled" id="slide-left"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" />
                            </svg></div>
                        <ul class="side-menu">
                            <li class="sub-category">
                                <h3>Main</h3>
                            </li>
                            <li class="slide">
                                <a class="side-menu__item" data-bs-toggle="slide" href="{{url('/')}}"><i class="side-menu__icon fe fe-home"></i><span class="side-menu__label">Dashboard</span></a>
                                <a class="side-menu__item" data-bs-toggle="slide" href="{{route('abonnement')}}"><i class="side-menu__icon fe fe-users"></i><span class="side-menu__label">Mes abonnements</span></a>
                                <a class="side-menu__item" data-bs-toggle="slide" href="{{route('facture')}}"><i class="side-menu__icon fa fa-newspaper-o"></i><span class="side-menu__label">Mes factures impayées</span></a>
                                <a class="side-menu__item" data-bs-toggle="slide" href="{{route('facture.payee')}}"><i class="side-menu__icon fa fa-credit-card"></i><span class="side-menu__label">Mes paiements</span></a>
                            </li>

                        </ul>
                        <div class="slide-right" id="slide-right"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" />
                            </svg></div>
                    </div>
                </div>
                <!--/APP-SIDEBAR-->
            </div>
            <!--app-sidebar-->
