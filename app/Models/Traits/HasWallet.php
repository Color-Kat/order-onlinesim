<?php

namespace App\Models\Traits;

use App\Models\Role;
use App\Models\Wallet;

/**
 * Trait HasWallet
 *
 * One-to-one relationship between User and Wallet.
 * Defines convenient methods for interacting with user's wallet.
 */
trait HasWallet
{
    public function wallet() {
        return $this
            ->hasOne(Wallet::class);
    }

    /**
     * Start a wallet query of current user.
     * Use for update wallet so that it is saved in the history.
     *
     * @return mixed
     */
    public function walletQuery() {
        return Wallet::query()
                     ->where('user_id', $this->id);
    }
}
