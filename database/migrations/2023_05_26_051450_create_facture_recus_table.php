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
        Schema::create('facture_recus', function (Blueprint $table) {
            $table->primary(["numero_facture", "num_recu"]);
            $table->string("numero_facture")->unique();
            $table->string("num_recu")->unique();
            $table->timestamps();
            $table->foreign("numero_facture")->references("numero_facture")->on("factures")->cascadeOnDelete();
            $table->foreign("num_recu")->references("num_recu")->on("recus")->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('facture_recus');
    }
};
