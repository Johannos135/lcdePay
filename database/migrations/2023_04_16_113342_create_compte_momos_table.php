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
            $table->string('operateur');
            $table->string('nom_client');
            $table->string('prenom_client');
            $table->double('depot_cumule');
            $table->double('retenu_cumule');
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
        Schema::dropIfExists('compte_momos');
    }
};
