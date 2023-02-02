/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { RavenApi } from "@ravenapp/raven";
import * as core from "../../../../core";

export const EmailOverride: core.serialization.ObjectSchema<serializers.EmailOverride.Raw, RavenApi.EmailOverride> =
    core.serialization
        .object({
            from: core.serialization.lazyObject(async () => (await import("../../..")).EmailRecipient),
            cc: core.serialization.list(
                core.serialization.lazyObject(async () => (await import("../../..")).EmailRecipient)
            ),
            bcc: core.serialization.list(
                core.serialization.lazyObject(async () => (await import("../../..")).EmailRecipient)
            ),
            attachments: core.serialization.list(
                core.serialization.lazyObject(async () => (await import("../../..")).Attachment)
            ),
            message: core.serialization.lazyObject(async () => (await import("../../..")).EmailMessage),
        })
        .extend(core.serialization.lazyObject(async () => (await import("../../..")).ChannelOverride));

export declare namespace EmailOverride {
    interface Raw extends serializers.ChannelOverride.Raw {
        from: serializers.EmailRecipient.Raw;
        cc: serializers.EmailRecipient.Raw[];
        bcc: serializers.EmailRecipient.Raw[];
        attachments: serializers.Attachment.Raw[];
        message: serializers.EmailMessage.Raw;
    }
}
