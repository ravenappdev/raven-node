/**
 * This file auto-generated by Fern from our API Definition.
 */

import { RavenApi } from "../../..";
import * as core from "../../../core";
import * as schemas from "../..";

export const Device: core.schemas.ObjectSchema<Device.Raw, RavenApi.device.Device> = core.schemas.object({
  id: core.schemas.string().optional(),
  platform: core.schemas.lazy(() => schemas.device.Platform).optional(),
  onesignalPlayerId: core.schemas.property("onesignal_player_id", core.schemas.string().optional()),
  fcmToken: core.schemas.property("fcm_token", core.schemas.string().optional()),
  xiaomiToken: core.schemas.property("xiaomi_token", core.schemas.string().optional()),
  oppoToken: core.schemas.property("oppo_token", core.schemas.string().optional()),
  vivoToken: core.schemas.property("vivo_token", core.schemas.string().optional()),
  huaweiToken: core.schemas.string().optional(),
  ravenId: core.schemas.property("raven_id", core.schemas.string().optional()),
  deviceSid: core.schemas.property("device_sid", core.schemas.lazy(() => schemas.ids.DeviceId).optional()),
  notificationsDisabled: core.schemas.property("notifications_disabled", core.schemas.boolean().optional()),
  createdAt: core.schemas.property("created_at", core.schemas.number().optional()),
  updatedAt: core.schemas.property("updated_at", core.schemas.number().optional()),
});

export declare namespace Device {
  interface Raw {
    id?: string | null;
    platform?: schemas.device.Platform.Raw | null;
    onesignal_player_id?: string | null;
    fcm_token?: string | null;
    xiaomi_token?: string | null;
    oppo_token?: string | null;
    vivo_token?: string | null;
    huaweiToken?: string | null;
    raven_id?: string | null;
    device_sid?: schemas.ids.DeviceId.Raw | null;
    notifications_disabled?: boolean | null;
    created_at?: number | null;
    updated_at?: number | null;
  }
}
