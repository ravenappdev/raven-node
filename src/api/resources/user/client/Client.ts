/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { RavenApi } from "@ravenapp/raven";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Client {
    interface Options {
        environment?: environments.RavenApiEnvironment | string;
        authorization?: core.Supplier<string>;
    }
}

export class Client {
    constructor(private readonly options: Client.Options) {}

    /**
     * Creates an AppUser if doesn't exist already, or updates user properties
     */
    public async createOrUpdate(
        appId: RavenApi.AppId,
        request: RavenApi.CreateUserRequest
    ): Promise<RavenApi.RavenUser> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.RavenApiEnvironment.Prod, `/v1/apps/${appId}/users`),
            method: "POST",
            headers: {
                Authorization: await core.Supplier.get(this.options.authorization),
            },
            body: await serializers.CreateUserRequest.json(request),
        });
        if (_response.ok) {
            return await serializers.RavenUser.parse(_response.body as serializers.RavenUser.Raw);
        }

        if (_response.error.reason === "status-code") {
            throw new errors.RavenApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.RavenApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.RavenApiTimeoutError();
            case "unknown":
                throw new errors.RavenApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Gets the requested user
     */
    public async get(appId: RavenApi.AppId, userId: RavenApi.UserId): Promise<RavenApi.RavenUser> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.RavenApiEnvironment.Prod,
                `/v1/apps/${appId}/users/${userId}`
            ),
            method: "GET",
            headers: {
                Authorization: await core.Supplier.get(this.options.authorization),
            },
        });
        if (_response.ok) {
            return await serializers.RavenUser.parse(_response.body as serializers.RavenUser.Raw);
        }

        if (_response.error.reason === "status-code") {
            throw new errors.RavenApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.RavenApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.RavenApiTimeoutError();
            case "unknown":
                throw new errors.RavenApiError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
