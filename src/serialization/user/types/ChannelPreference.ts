/**
 * This file auto-generated by Fern from our API Definition.
 */

import { RavenApi } from "../../..";
import * as core from "../../../core";

export const ChannelPreference: core.schemas.ObjectSchema<ChannelPreference.Raw, RavenApi.user.ChannelPreference> =
  core.schemas.object({
    disabled: core.schemas.boolean(),
  });

export declare namespace ChannelPreference {
  interface Raw {
    disabled: boolean;
  }
}