<?php

namespace App\Observers;

use App\Models\Wallet;
use App\Models\WalletHistory;
use Illuminate\Support\Facades\Log;

class WalletObserver
{
    /**
     * Handle the Wallet "created" event.
     *
     * @param  \App\Models\Wallet  $wallet
     * @return void
     */
    public function created(Wallet $wallet)
    {
        //
    }

    public function updating() {
//        Log::info('upating, nah');
    }


    /**
     * Handle the Wallet "updated" event.
     * Insert new wallet history record when Wallet model is updated
     *
     * @param  \App\Models\Wallet  $wallet
     * @return void
     */
    public function updated(Wallet $wallet)
    {
        Log::info('updated, nah');

        if ($wallet->isDirty('balance')) {
            $oldBalance = $wallet->getOriginal('balance');
            $newBalance = $wallet->balance;

            $balanceDiff = $newBalance - $oldBalance;

            WalletHistory::query()->insert([
                'user_id' => $wallet->user_id,
                'wallet_id' => $wallet->id,
                'amount' => $balanceDiff,
                'currency' => $wallet->currency,
            ]);
        }
    }

    /**
     * Handle the Wallet "deleted" event.
     *
     * @param  \App\Models\Wallet  $wallet
     * @return void
     */
    public function deleted(Wallet $wallet)
    {
        //
    }

    /**
     * Handle the Wallet "restored" event.
     *
     * @param  \App\Models\Wallet  $wallet
     * @return void
     */
    public function restored(Wallet $wallet)
    {
        //
    }

    /**
     * Handle the Wallet "force deleted" event.
     *
     * @param  \App\Models\Wallet  $wallet
     * @return void
     */
    public function forceDeleted(Wallet $wallet)
    {
        //
    }
}
