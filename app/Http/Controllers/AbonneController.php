<?php

namespace App\Http\Controllers;

use App\Models\Abonne;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AbonneController extends Controller
{
    public function store(Request $request)
    {
        $rules = [
            "nom" => ["required", "string"],
            "prenom" => ["required", "string"],
            "telephone" => ["required", "string"],
            "genre" => ["required", "string"],
            "adresse" => ["required", "string"]
        ];

        $validators = Validator::make($request->all(), $rules);

        if ($validators->fails()) {
            return response()->json([
                "success" => false,
                "message" => collect($validators->errors())->flatten()
            ], 400);
        }

        try {
            $numero = random_int(1000, 10000);
            $abonne = new Abonne();
            $abonne->numero_abonne = $numero;
            $abonne->nom = $request->nom;
            $abonne->prenom = $request->prenom;
            $abonne->telephone = $request->telephone;
            $abonne->email = $request->email;
            $abonne->genre = $request->genre;
            $abonne->adresse = $request->adresse;
            $abonne->complement_adresse = $request->complement_adresse;
            $abonne->save();

            return response()->json([
                "success" => true,
                "message" => "Abonné enregistré avec succès!!!",
                "data" => $abonne
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                "success" => false,
                "message" => collect($e->getMessage())->flatten()
            ], 400);
        }
    }
}
