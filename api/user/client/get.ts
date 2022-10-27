/**
 * This file auto-generated by Fern from our API Definition.
 */

import * as core from "../../../core";
import { RavenApi } from "../../..";

export interface Request {
  authorization?: core.Supplier<string>;
  /** your app identifier */
  appId: RavenApi.ids.AppId;
  /** your user identifier */
  userId: RavenApi.ids.UserId;
}

export type Response = core.APIResponse<RavenApi.user.RavenUser, RavenApi.user.get.Error>;
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
