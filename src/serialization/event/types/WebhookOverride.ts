/**
 * This file auto-generated by Fern from our API Definition.
 */

import { RavenApi } from "../../..";
import * as core from "../../../core";
import * as serializers from "../..";

export const WebhookOverride: core.schemas.ObjectSchema<WebhookOverride.Raw, RavenApi.event.WebhookOverride> =
  core.schemas.object({}).extend(core.schemas.lazyObject(() => serializers.event.ChannelOverride));

export declare namespace WebhookOverride {
  interface Raw extends serializers.event.ChannelOverride.Raw {}
}