/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { RavenApi } from "@ravenapp/raven";

export interface SlackOverride extends RavenApi.ChannelOverride {
    message: RavenApi.SlackMessage;
}
