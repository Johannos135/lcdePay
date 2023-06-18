<?php

namespace App\Http\Controllers;

use App\Lcdepay\Facades\LcdePay;
use App\Models\Bill;
use Illuminate\Http\Request;
use Bmatovu\MtnMomo\Products\Collection;
use Bmatovu\MtnMomo\Exceptions\CollectionRequestException;
use Ramsey\Uuid\Uuid;

class BillController extends Controller
{
    public function paiement(Request $request)
    {
        $numero_momo = $request->numero_momo;

        $bill = Bill::find(1);
        $collection = new Collection();

        $id_trans = 'REF-' . random_int(10000, 1000000);
        try {
            $transaction_id = $collection->requestToPay($id_trans, $numero_momo, "20000");
            $stat = $collection->getTransactionStatus($transaction_id);
            if ($stat["status"] == "SUCCESSFUL") {
                $bill->transaction_id = $transaction_id;
                $bill->numero_momo = $numero_momo;
                $bill->is_paid = true;
                $bill->save();

                return response()->json([
                    'success' => true,
                    'message' => 'Paiement effectué avec succès',
                    //'status' => $stat,
                    'data' => $bill
                ], 200);
            } else {
                return response()->json([
                    'success' => false,
                    'message' => "Le paiement a échoué",
                ], 400);
            }
        } catch (CollectionRequestException $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ], 400);
        }
    }
}
