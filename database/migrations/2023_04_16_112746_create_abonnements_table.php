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
            $table->unsignedInteger('num_direction');
            $table->string('code_secteur');
            $table->string('num_abonne');
            $table->timestamps();
            $table->foreign('code_categorie')->references('code_categorie')->on('categories');
            $table->foreign('num_agence')->references('numero_agence')->on('agences');
            $table->foreign('num_direction')->references('numero_direction')->on('directions');
            $table->foreign('code_secteur')->references('code_secteur')->on('secteurs');
            $table->foreign('num_abonne')->references('numero_abonne')->on('abonnes');
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
