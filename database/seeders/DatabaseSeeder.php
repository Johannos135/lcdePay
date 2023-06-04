<?php

namespace Database\Seeders;

use App\Models\Abonne;
use App\Models\Abonnement;
use App\Models\Agence;
use App\Models\Branchement;
use App\Models\Categorie;
use App\Models\Direction;
use App\Models\Facture;
use App\Models\PeriodeFacturation;
use App\Models\PointLivraison;
use App\Models\RythmeFacturation;
use App\Models\Secteur;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $directions = [
            [
                'nom_direction' => 'DDEX BZV-POOL',
                'adresse' => 'Direction adresse',
                'telephone' => '064000000',
            ],
            [
                'nom_direction' => 'DDEX KOUILOU-PNR',
                'adresse' => 'Direction adresse',
                'telephone' => '064000000',
            ],
            [
                'nom_direction' => 'DDEX PLATEAUX-LEKOUMOU_BOUENZA',
                'adresse' => 'Direction adresse',
                'telephone' => '064000000',
            ],
        ];
        foreach ($directions as $direction) {
            # code...
            Direction::create($direction);
        }

        // SECTEUR
        $secteurs = [
            [
                'code_secteur' => 's1',
                'libelle' => 'Secteur 1'
            ],
            [
                'code_secteur' => 's2',
                'libelle' => 'Secteur 2'
            ],
            [
                'code_secteur' => 's3',
                'libelle' => 'Secteur 3'
            ],
        ];
        foreach ($secteurs as $secteur) {
            # code...
            Secteur::create($secteur);
        }

        // Branchement
        $branchements = [
            [
                'num_branchemment' => 'BR0001',
                'code_secteur' => 's1',
                'adresse_branchement' => 'Add branchement',
                'etat_branchement' => 'Bon état',
                'quartier_branchement' => 'Quartier branchement',
                'longueur_branchement' => '12m',
            ],
            [
                'num_branchemment' => 'BR0002',
                'code_secteur' => 's2',
                'adresse_branchement' => 'Add branchement',
                'etat_branchement' => 'Bon état',
                'quartier_branchement' => 'Quartier branchement',
                'longueur_branchement' => '22m',
            ],
            [
                'num_branchemment' => 'BR0003',
                'code_secteur' => 's3',
                'adresse_branchement' => 'Add branchement',
                'etat_branchement' => 'Bon état',
                'quartier_branchement' => 'Quartier branchement',
                'longueur_branchement' => '32m',
            ],
        ];
        foreach ($branchements as $branchement) {
            # code...
            Branchement::create($branchement);
        }

        // ABONNES
        $abonnes = [
            [
                'numero_abonne' => 'AB0001',
                'nom' => 'OKOUO',
                'prenom' => 'Bethsaeda Rollande',
                'telephone' => '066000728',
                'email' => 'okoouo@gmail.com',
                'genre' => 'F',
                'adresse' => 'Okouo Adresse',
            ],
            [
                'numero_abonne' => 'AB0002',
                'nom' => 'ESSIERE',
                'prenom' => 'Johanne Leconte',
                'telephone' => '064754373',
                'email' => 'johanne@gmail.com',
                'genre' => 'M',
                'adresse' => 'Johanne Adresse',
            ],
            [
                'numero_abonne' => 'AB0003',
                'nom' => 'BOUAYA',
                'prenom' => 'Riche Nazareth',
                'telephone' => '065870012',
                'email' => 'riche@gmail.com',
                'genre' => 'F',
                'adresse' => 'Riche Adresse',
            ],
        ];

        foreach ($abonnes as $abonne) {
            # code...
            Abonne::create($abonne);
        }

        // CATEGORIES
        $categories = [
            ['libelle' => 'Catégorie 1'],
            ['libelle' => 'Catégorie 2'],
            ['libelle' => 'Catégorie 3'],
        ];

        foreach ($categories as $categorie) {
            # code...
            Categorie::create($categorie);
        }

        // RYTHME FACTURATION
        $rythmes = [
            ['libelle' => 'MENSUEL'],
            ['libelle' => 'BIMENSTRUEL'],
            ['libelle' => 'TRIMESTRIEL'],
        ];

        foreach ($rythmes as $rythme) {
            # code...
            RythmeFacturation::create($rythme);
        }
        // PERIODE FACTURATION
        $periodes = [
            ['libelle' => '1BM2023'],
            ['libelle' => '2BM2023'],
            ['libelle' => '3BM2023'],
            ['libelle' => '4BM2023'],
            ['libelle' => '5BM2023'],
            ['libelle' => '6BM2023'],
        ];

        foreach ($periodes as $periode) {
            # code...
            PeriodeFacturation::create($periode);
        }

        // POINT DE LIVRAISON
        $points = [
            [
                'num_point_livraison' => 'PT0001',
                'calibre' => '4',
                'adresse' => 'pt adresse',
                'quartier' => 'PT0001 quartier',
                'num_branchemment' => 'BR0001',
                'num_abonne' => 'AB0001',
            ],
            [
                'num_point_livraison' => 'PT0002',
                'calibre' => '4',
                'adresse' => 'pt adresse',
                'quartier' => 'PT0002 quartier',
                'num_branchemment' => 'BR0002',
                'num_abonne' => 'AB0002',
            ],
            [
                'num_point_livraison' => 'PT0003',
                'calibre' => '4',
                'adresse' => 'pt adresse',
                'quartier' => 'PT0003 quartier',
                'num_branchemment' => 'BR0003',
                'num_abonne' => 'AB0003',
            ],
        ];

        foreach ($points as $point) {
            # code...
            PointLivraison::create($point);
        }

        // AGENCE
        $agences = [
            [
                'nom_agence' => 'AGENCE OUENZE',
                'adresse' => 'ADRESSE AGENCE OUENZE',
                'telephone' => '065455545',
                'numero_direction' => 1,
            ],
            [
                'nom_agence' => 'AGENCE MOUNGALI',
                'adresse' => 'ADRESSE AGENCE MOUNGALI',
                'telephone' => '065455545',
                'numero_direction' => 1,
            ],
            [
                'nom_agence' => 'AGENCE KM4',
                'adresse' => 'ADRESSE AGENCE KM4',
                'telephone' => '065455545',
                'numero_direction' => 2,
            ],
        ];

        foreach ($agences as $agence) {
            # code...
            Agence::create($agence);
        }

        // ABONNEMENT

        $abonnements = [
            [
                'num_abonnement' => 'ABON0001',
                'code_categorie' => 1,
                'num_agence' => 1,
                'rythme_facturation_id' => 2,
                'num_abonne' => 'AB0001',
                'num_point_livraison' => 'PT0001',
            ],
            [
                'num_abonnement' => 'ABON0002',
                'code_categorie' => 2,
                'num_agence' => 2,
                'rythme_facturation_id' => 2,
                'num_abonne' => 'AB0001',
                'num_point_livraison' => 'PT0002',
            ],
            [
                'num_abonnement' => 'ABON0003',
                'code_categorie' => 1,
                'num_agence' => 1,
                'rythme_facturation_id' => 2,
                'num_abonne' => 'AB0002',
                'num_point_livraison' => 'PT0002',
            ],
        ];

        foreach ($abonnements as $abonnement) {
            # code...
            Abonnement::create($abonnement);
        }

        // FACTURE
        $factures = [
            [
                "numero_facture" => "FACT0001",
                "ancien_index" => 4,
                "nouvel_index" => 7,
                "volume_consomme" => "15",
                "volume_forfaitaire" => "2",
                "tarif" => "541",
                "volume_facture" => "4",
                "prix_unitaire" => "400",
                "montant_ht" => "8250",
                "montant_consommation" => "550",
                "montant_entretien_reseau" => "50",
                "montant_entretien_branchement" => "100",
                "montant_tva" => "20",
                "montant_ca" => "200",
                "montant_surtaxe" => "15",
                "montant_timbre_fiscal" => "50",
                "montant_timbre_numeric" => "50",
                "montant_facture" => "18050",
                "date_penalite" => "2022-10-02",
                "montant_penalite" => "0",
                "montant_cumul_momo" => "20000",
                "date_dernier_paiement_momo" => "2021-10-06",
                "num_abonnement" => "ABON0001",
                "code_periode" => 3
            ],
            [
                "numero_facture" => "FACT0002",
                "ancien_index" => 4,
                "nouvel_index" => 7,
                "volume_consomme" => "15",
                "volume_forfaitaire" => "2",
                "tarif" => "541",
                "volume_facture" => "4",
                "prix_unitaire" => "400",
                "montant_ht" => "8250",
                "montant_consommation" => "550",
                "montant_entretien_reseau" => "50",
                "montant_entretien_branchement" => "100",
                "montant_tva" => "20",
                "montant_ca" => "200",
                "montant_surtaxe" => "15",
                "montant_timbre_fiscal" => "50",
                "montant_timbre_numeric" => "50",
                "montant_facture" => "12750",
                "date_penalite" => "2022-10-02",
                "montant_penalite" => "0",
                "montant_cumul_momo" => "20000",
                "date_dernier_paiement_momo" => "2021-10-06",
                "num_abonnement" => "ABON0002",
                "code_periode" => 2
            ]
        ];

        foreach ($factures as $facture) {
            # code...
            Facture::create($facture);
        }
    }
}
