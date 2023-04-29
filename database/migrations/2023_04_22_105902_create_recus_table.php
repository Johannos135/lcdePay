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
        Schema::create('recus', function (Blueprint $table) {
            $table->string('num_recu')->primary();
            $table->string('type_recu');
            $table->double('montant_recu');
            $table->double('rendu_monnaie');
            //foreign
            $table->unsignedInteger('caissiere_id');
            $table->string('numero_abonne');
            $table->string('numero_compte');
            $table->string('numero_facture');
            $table->timestamps();
            $table->foreign('caissiere_id')->references('id')->on('caissieres');
            $table->foreign('numero_abonne')->references('numero_abonne')->on('abonnes');
            $table->foreign('numero_compte')->references('numero_compte')->on('compte_momos');
            $table->foreign('numero_facture')->references('numero_facture')->on('factures');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('recus');
    }
};
