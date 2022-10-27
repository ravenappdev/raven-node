/**
 * This file auto-generated by Fern from our API Definition.
 */

import * as core from "../../../core";
import { RavenApi } from "../../..";

export interface Request {
  authorization?: core.Supplier<string>;
  appId: RavenApi.ids.AppId;
  /**
   * The API supports idempotency for safely retrying requests without accidentally performing the same operation twice.
   * This is useful when an API call is disrupted in transit and you do not receive a response.
   * For example, if a request to send event does not respond due to a network connection error, you can retry the request with the same idempotency key to guarantee that no more than one event is sent.
   * An idempotency key is a unique value generated by the client which the server uses to recognize subsequent retries of the same request.
   * How you create unique keys is up to you, but we suggest using V4 UUIDs, or another random string with enough entropy to avoid collisions.
   * Idempotency keys can be up to 255 characters long.
   *
   */
  idempotencyKey?: string;
  _body: RavenApi.event.SendEventRequest;
}

export type Response = core.APIResponse<RavenApi.event.SendEventResponse, RavenApi.event.send.Error>;
export type Error = Error._Unknown;

export declare namespace Error {
  interface _Unknown extends _Utils {
    errorName: void;
    content: core.Fetcher.Error;
  }

  interface _Utils {
    _visit: <Result>(visitor: Error._Visitor<Result>) => Result;
  }

  interface _Visitor<Result> {
    _other: (value: core.Fetcher.Error) => Result;
  }
}
