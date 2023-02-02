/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { RavenApi } from "@ravenapp/raven";
import * as core from "../../../../core";

export const SlackMessage: core.serialization.ObjectSchema<serializers.SlackMessage.Raw, RavenApi.SlackMessage> =
    core.serialization.object({
        text: core.serialization.string(),
        blocks: core.serialization.unknown(),
    });

export declare namespace SlackMessage {
    interface Raw {
        text: string;
        blocks?: unknown;
    }
}