<?php

namespace App\Http\Controllers;

use App\Models\Wallet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class FinanceController extends Controller
{
    public function increaseBalance(Request $request)
    {
        $user = $request->user();
        $amount = $request->get('amount');

        $wallet = $user->wallet()->first();
        $wallet->balance += $amount;
        $wallet->total_balance += $amount;
        $wallet->last_payment_method = 'Sber';
        $result = $wallet->save();
    }
}
