<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DashboardController extends Controller
{
    private $module_path = 'livewire.';

    public function dashboard()
    {
        return view($this->module_path . 'dashboard');
    }
}
