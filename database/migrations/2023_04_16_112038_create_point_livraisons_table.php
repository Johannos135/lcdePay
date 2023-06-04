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
        Schema::create('point_livraisons', function (Blueprint $table) {
            $table->string('num_point_livraison')->primary();
            $table->integer('calibre');
            $table->string('adresse');
            $table->string('quartier');
            $table->string('num_branchemment'); //foreign
            $table->string('num_abonne');
            $table->timestamps();
            $table->foreign('num_branchemment')->references('num_branchemment')->on('branchements');
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
        Schema::dropIfExists('point_livraisons');
    }
};
