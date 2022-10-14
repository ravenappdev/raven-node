/**
 * This file auto-generated by Fern from our API Definition.
 */

import { RavenApi } from "../../..";
import * as core from "../../../core";
import * as schemas from "../..";

export const User: core.schemas.ObjectSchema<User.Raw, RavenApi.event.User> = core.schemas.object({
  userId: core.schemas.property(
    "user_id",
    core.schemas.lazy(() => schemas.ids.UserId)
  ),
  email: core.schemas.string().optional(),
  mobile: core.schemas.string().optional(),
  whatsappMobile: core.schemas.property("whatsapp_mobile", core.schemas.string().optional()),
  onesignalExternalId: core.schemas.property("onesignal_external_id", core.schemas.string().optional()),
  fcmTokens: core.schemas.property("fcm_tokens", core.schemas.list(core.schemas.string()).optional()),
});

export declare namespace User {
  interface Raw {
    user_id: schemas.ids.UserId.Raw;
    email?: string | null;
    mobile?: string | null;
    whatsapp_mobile?: string | null;
    onesignal_external_id?: string | null;
    fcm_tokens?: string[] | null;
  }
}
