/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import { RavenApi } from "@ravenapp/raven";
import * as core from "../../core";

export const BatchEvent: core.serialization.ObjectSchema<serializers.BatchEvent.Raw, RavenApi.BatchEvent> =
    core.serialization.object({
        data: core.serialization.record(core.serialization.string(), core.serialization.unknown()),
        user: core.serialization.lazyObject(async () => (await import("..")).User).optional(),
        override: core.serialization.lazyObject(async () => (await import("..")).EventOverride).optional(),
    });

export declare namespace BatchEvent {
    interface Raw {
        data: Record<string, unknown>;
        user?: serializers.User.Raw | null;
        override?: serializers.EventOverride.Raw | null;
    }
}
