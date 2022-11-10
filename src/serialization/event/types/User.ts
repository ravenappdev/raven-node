/**
 * This file auto-generated by Fern from our API Definition.
 */

import { RavenApi } from "../../..";
import * as core from "../../../core";
import * as serializers from "../..";

export const User: core.schemas.ObjectSchema<User.Raw, RavenApi.event.User> = core.schemas.object({
  userId: core.schemas.property("user_id", core.schemas.lazy(() => serializers.ids.UserId).optional()),
  email: core.schemas.string().optional(),
  mobile: core.schemas.string().optional(),
  whatsappMobile: core.schemas.property("whatsapp_mobile", core.schemas.string().optional()),
  onesignalExternalId: core.schemas.property("onesignal_external_id", core.schemas.string().optional()),
  onesignalPlayerIds: core.schemas.property(
    "onesignal_player_ids",
    core.schemas.list(core.schemas.string()).optional()
  ),
  fcmTokens: core.schemas.property("fcm_tokens", core.schemas.list(core.schemas.string()).optional()),
  iosTokens: core.schemas.property("ios_tokens", core.schemas.list(core.schemas.string()).optional()),
  slack: core.schemas.lazyObject(() => serializers.user.SlackProfile).optional(),
  telegram: core.schemas.lazyObject(() => serializers.user.TelegramProfile).optional(),
  fcmTopic: core.schemas.property("fcm_topic", core.schemas.string().optional()),
  fcmDeviceGroup: core.schemas.property("fcm_device_group", core.schemas.string().optional()),
});

export declare namespace User {
  interface Raw {
    user_id?: serializers.ids.UserId.Raw | null;
    email?: string | null;
    mobile?: string | null;
    whatsapp_mobile?: string | null;
    onesignal_external_id?: string | null;
    onesignal_player_ids?: string[] | null;
    fcm_tokens?: string[] | null;
    ios_tokens?: string[] | null;
    slack?: serializers.user.SlackProfile.Raw | null;
    telegram?: serializers.user.TelegramProfile.Raw | null;
    fcm_topic?: string | null;
    fcm_device_group?: string | null;
  }
}
