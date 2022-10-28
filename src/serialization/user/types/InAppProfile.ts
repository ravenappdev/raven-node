/**
 * This file auto-generated by Fern from our API Definition.
 */

import { RavenApi } from "../../..";
import * as core from "../../../core";

export const InAppProfile: core.schemas.ObjectSchema<InAppProfile.Raw, RavenApi.user.InAppProfile> =
  core.schemas.object({
    lastOpen: core.schemas.property("last_open", core.schemas.string()),
  });

export declare namespace InAppProfile {
  interface Raw {
    last_open: string;
  }
}