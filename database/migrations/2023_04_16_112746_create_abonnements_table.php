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
        Schema::create('abonnements', function (Blueprint $table) {
            $table->string('num_abonnement')->primary();
            //foreignKey
            $table->unsignedInteger('code_categorie');
            $table->unsignedInteger('num_agence');
            $table->unsignedInteger('rythme_facturation_id');
            $table->string('num_abonne');
            $table->string('num_point_livraison');
            $table->timestamps();
            $table->foreign('code_categorie')->references('code_categorie')->on('categories');
            $table->foreign('num_agence')->references('numero_agence')->on('agences');
            $table->foreign('rythme_facturation_id')->references('id')->on('rythme_facturations');
            $table->foreign('num_abonne')->references('numero_abonne')->on('abonnes');
            $table->foreign('num_point_livraison')->references('num_point_livraison')->on('point_livraisons');
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('abonnements');
    }
};
