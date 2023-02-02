/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { RavenApi } from "@ravenapp/raven";

export interface User {
    /**
     * userId to send the notifications to.
     * This is  your own user identifier which you have used to [create user on Raven](https://docs.raven.dev/api-reference/create-user)
     *
     */
    userId?: RavenApi.UserId;
    email?: string;
    /** mobile with country code prefix (e.g +91) */
    mobile?: string;
    /**
     * mobile with country code prefix (e.g. +91).
     * if empty, `mobile` is considered for whatsapp
     *
     */
    whatsappMobile?: string;
    /**
     * [OneSignal external user IDs](https://documentation.onesignal.com/docs/external-user-ids)
     *
     */
    onesignalExternalId?: string;
    onesignalPlayerIds?: string[];
    /** List of fcm tokens.  eg. ["<fcmtoken1", "<fcmtoken2>"] */
    fcmTokens?: string[];
    iosTokens?: string[];
    slack?: RavenApi.SlackProfile;
    telegram?: RavenApi.TelegramProfile;
    fcmTopic?: string;
    fcmDeviceGroup?: string;
}