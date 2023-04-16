<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('factures', function (Blueprint $table) {
            $table->string('numero_facture')->primary();
            $table->integer('ancien_index');
            $table->integer('nouvel_index');
            $table->double('volume_consomme');
            $table->double('volume_forfaitaire');
            $table->double('tarif');
            $table->double('volume_facture');
            $table->double('prix_unitaire');
            $table->double('montant_ht');
            $table->double('montant_consommation');
            $table->double('montant_entretien_reseau');
            $table->double('montant_entretien_branchement');
            $table->double('montant_tva');
            $table->double('montant_ca');
            $table->double('montant_surtaxe');
            $table->double('montant_timbre_fiscal');
            $table->double('montant_timbre_numeric');
            $table->double('montant_facture');
            $table->date('date_penalite')->date_format('dd-mm-YYYY');
            $table->double('montant_penalite');
            $table->double('montant_cumul_momo');
            $table->date('date_dernier_paiement_momo')->date_format('dd-mm-YYYY');
            $table->string('num_point_livraison'); //foreignKey
            $table->unsignedInteger('code_categorie');
            $table->unsignedInteger('code_periode');
            $table->string('num_abonnement');
            $table->unsignedInteger('num_agence');
            $table->string('num_compteur');
            $table->unsignedInteger('num_direction');
            $table->string('code_secteur');
            $table->string('num_abonne');
            $table->timestamps();
            $table->foreign('num_point_livraison')->references('num_point_livraison')->on('point_livraisons');
            $table->foreign('code_categorie')->references('code_categorie')->on('categories');
            $table->foreign('code_periode')->references('code_periode')->on('periode_facturations');
            $table->foreign('num_abonnement')->references('num_abonnement')->on('abonnements');
            $table->foreign('num_agence')->references('numero_agence')->on('agences');
            $table->foreign('num_compteur')->references('numero_compteur')->on('compteurs');
            $table->foreign('num_direction')->references('numero_direction')->on('directions');
            $table->foreign('code_secteur')->references('code_secteur')->on('secteurs');
            $table->foreign('num_abonne')->references('numero_abonne')->on('abonnes');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('factures');
    }
};
