<?php

namespace App\Http\Controllers;

use App\Models\Wallet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class FinanceController extends Controller
{
    public function increaseBalance(Request $request) {
        $user = $request->user();
        $amount = $request->get('amount');

        Wallet::query()->update(['balance'=>rand(0,1000)]);

//        $result = $user->walletQuery()->update([
//            'balance' => DB::raw("balance + $amount"),
//            'total_balance' => DB::raw("balance + $amount"),
//        ]);

//        dump($result);
    }
}
