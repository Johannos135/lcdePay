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
        Schema::create('agences', function (Blueprint $table) {
            $table->increments('numero_agence');
            $table->string('nom_agence');
            $table->string('adresse');
            $table->string('telephone');
            $table->string('email')->nullable();
            $table->unsignedInteger('numero_direction');
            $table->timestamps();
            $table->softDeletes();
            $table->foreign('numero_direction')->references('numero_direction')->on('directions')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('agences');
    }
};
