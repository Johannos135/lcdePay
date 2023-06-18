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
        Schema::create('branchements', function (Blueprint $table) {
            $table->string('num_branchemment')->primary();
            $table->string('code_secteur'); //foreign
            $table->string('etat_branchement');
            $table->string('adresse_branchement');
            $table->string('quartier_branchement');
            $table->string('longueur_branchement');
            $table->timestamps();
            $table->foreign('code_secteur')->references('code_secteur')->on('secteurs');
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
        Schema::dropIfExists('branchements');
    }
};
