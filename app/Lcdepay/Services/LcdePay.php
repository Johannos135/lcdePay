<?php

namespace App\Lcdepay\Services;

use GuzzleHttp\Client;
use Illuminate\Support\Facades\Log;
use Ramsey\Uuid\Uuid;

class LcdePay
{
    const API_URL = "https://sandbox.momodeveloper.mtn.com";
    //c
    const API_KEY  = "fa2d72b2bb1a465b9014c39ec840143f";
    const API_SECRET  = "04ad6360b55a461aad6efcb760e08985";
    const CURRENCY  = "XAF";

    private $client;
    // client APP ID 97a05ee2-c898-4457-b1eb-2ddb795562d9
    public function __construct()
    {
        $this->client = new Client([
            'base_uri' => self::API_URL,
            'headers' => [
                'Ocp-Apim-Subscription-Key' => self::API_KEY,
                'Authorization' => 'Basic ' . base64_encode(self::API_KEY . ':' . self::API_SECRET),
                'Content-Type' => 'application/json',
                'X-Target-Environment' => 'sandbox'
            ]
        ]);
    }

    public function connect()
    {
        try {
            $response = $this->client->post('/collection/token/', [
                'json' => [
                    'grant_type' => 'client_credentials'
                ]
            ]);

            $data = json_decode($response->getBody()->getContents(), true);
            return $data;
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            throw new \Exception("Impossible de se connecter à l'API MTN Mobile Money");
        }
    }

    public function pay($amount, $phone_number)
    {
        $transaction_id = Uuid::uuid4()->toString();
        //$callback_url = config('mtn_mobile_money.callback_url');

        try {
            $response = $this->client->request('POST', '/collection/v1_0/requesttopay/', [
                'headers' => [
                    'X-Reference-Id' => $transaction_id,
                    'X-Target-Environment' => 'sandbox'
                    //'X-Callback-Url' => $callback_url
                ],
                'json' => [
                    'amount' => $amount,
                    'currency' => self::CURRENCY,
                    'externalId' => $transaction_id,
                    'payer' => [
                        'partyIdType' => 'MSISDN',
                        'partyId' => $phone_number
                    ],
                    'payerMessage' => 'Payment for goods',
                    'payeeNote' => 'Payment for goods'
                ]
            ]);

            $data = json_decode($response->getBody()->getContents(), true);

            return $transaction_id;
        } catch (\Exception $e) {
            Log::error($e->getMessage());

            throw new \Exception('Failed to initiate payment');
        }
    }

    public function checkTransactionStatus($transaction_id)
    {
        try {
            $response = $this->client->get('/collection/v1_0/requesttopay/' . $transaction_id, [
                'headers' => [
                    'X-Target-Environment' => 'sandbox'
                ]
            ]);

            $data = json_decode($response->getBody()->getContents(), true);

            if ($data['status'] == 'SUCCESSFUL') {
                return true;
            } else {
                throw new \Exception('Transaction failed: ' . $data['reason']);
            }
        } catch (\Exception $e) {
            Log::error($e->getMessage());

            throw new \Exception('Failed to get transaction details');
        }
    }
}
