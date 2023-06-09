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
            $table->string('type_recu')->nullable();
            $table->double('montant_recu');
            $table->double('rendu_monnaie')->nullable();
            $table->string('operateur')->nullable();
            $table->string('numero_compte_momo');
            $table->string('transaction_id')->nullable();
            //foreign
            $table->unsignedBigInteger('caissiere_id')->nullable();
            $table->string('numero_abonne')->nullable();
            $table->timestamps();
            $table->softDeletes();
            $table->foreign('caissiere_id')->references('id')->on('caissieres');
            $table->foreign('numero_abonne')->references('numero_abonne')->on('abonnes');
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
