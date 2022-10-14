/**
 * This file auto-generated by Fern from our API Definition.
 */

import { RavenApi } from "../../..";
import * as core from "../../../core";

export const SlackProfile: core.schemas.ObjectSchema<SlackProfile.Raw, RavenApi.user.SlackProfile> =
  core.schemas.object({
    accessToken: core.schemas.property("access_token", core.schemas.string()),
    email: core.schemas.string(),
    channelId: core.schemas.property("channel_id", core.schemas.string()),
  });

export declare namespace SlackProfile {
  interface Raw {
    access_token: string;
    email: string;
    channel_id: string;
  }
}
