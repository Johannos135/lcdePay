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
            $table->string('nom_proprietaire');
            $table->string('prenom_proprietaire');
            $table->string('adresse');
            $table->string('quartier');
            $table->timestamps();
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
