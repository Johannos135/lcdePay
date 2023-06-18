<?php

namespace App\PDF;

use TCPDF;

class ReceiptPDF extends TCPDF
{
  public function generateReceipt($recu)
  {
    // Informations spécifiques à inclure dans le reçu
    $numeroCaisse = "Numéro de caisse : XXX"; // Remplacez XXX par le numéro de caisse réel
    $numeroRecu = "Numéro de reçu : " . $recu->num_recu;
    $dateEncaissement = "Date d'encaissement : " . date('Y-m-d'); // Remplacez par la date d'encaissement réelle

    // Informations de la facture


    $agence = "Agence : " . "QG000";
    $identifiant = "Identifiant : " . "AB0001";

    $nomAbonne = "Nom de l'abonné : " . "Johqnne Essiere";
    $numéroAbonnement = "Numéro d'abonnement : " . "ABONNEMENT 0002";


    $secteur = "Secteur : " . "Secteur 00002";


    $typeFacture = "Type de facture : " . "VENTE D'EAU";


    $numeroFacture = "Numéro de facture : " . "FACT0001";


    $montantFacture = "Montant de la facture : " . $recu->montant_recu;
    $montantEncaisse = "Montant encaissé : " .  $recu->montant_recu;
    $resteAPayer = "Reste à payer : " . 0;
    $totalFacture = "Total de la facture : " . $recu->montant_recu;

    // Construction du contenu du reçu


    $contenu = $numeroCaisse . "<br>";
    $contenu .= $numeroRecu . "<br>";
    $contenu .= $dateEncaissement . "<br>";
    $contenu .= "<br>"; // Ligne vide avant le tableau
    $contenu .= "<table>";


    $contenu .= "<tr><td>$agence</td><td>$identifiant</td><td>$nomAbonne</td></tr>";


    $contenu .= "<tr><td>$numéroAbonnement</td><td>$secteur</td><td>$typeFacture</td></tr>";
    $contenu .= "<tr><td>$numeroFacture</td><td>$montantFacture</td><td>$montantEncaisse</td></tr>";
    $contenu .= "<tr><td>$resteAPayer</td><td>$totalFacture</td></tr>";


    $contenu .= "</table>";

    $this->SetMargins(10, 10, 10);


    $this->SetFont('helvetica', '', 12);
    $this->AddPage();
    $this->writeHTML($contenu, true, false, true, false, '');
  }
}
