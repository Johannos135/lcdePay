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
            $table->string('num_abonnement'); //foreignKey
            $table->unsignedInteger('code_periode');
            $table->timestamps();
            $table->foreign('num_abonnement')->references('num_abonnement')->on('abonnements');
            $table->foreign('code_periode')->references('code_periode')->on('periode_facturations');
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
