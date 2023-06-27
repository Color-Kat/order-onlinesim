<?php

namespace App\Models\Traits;

use App\Notifications\EmailVerificationNotification;
use App\Notifications\PasswordResetNotification;

/**
 * This trait overrides default email verification and password reset email templates
 */
trait AuthEmailTrait
{
    /**
     * Send the password reset notification.
     *
     * @param  string  $token
     * @return void
     */
    public function sendPasswordResetNotification($token)
    {
        $this->notify(new PasswordResetNotification($token));
    }

    /**
     * Send the email verified notification
     */
    public function sendEmailVerificationNotification()
    {
        $this->notify(new EmailVerificationNotification());
    }
}
