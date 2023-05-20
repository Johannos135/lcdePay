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
        Schema::create('compte_momos', function (Blueprint $table) {
            $table->string('numero_compte')->primary();
            $table->string('operateur')->nullable();
            $table->string('numero_abonne'); //foreignKey
            // $table->string('nom_client');
            // $table->string('prenom_client')->nullable();
            $table->double('depot_cumule')->nullable();
            $table->double('retenu_cumule')->nullable();
            $table->timestamps();
            $table->softDeletes();
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
        Schema::dropIfExists('compte_momos');
    }
};
