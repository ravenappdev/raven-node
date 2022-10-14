/**
 * This file auto-generated by Fern from our API Definition.
 */

import * as core from "../../../core";
import { RavenApi } from "../../..";

export interface Request {
  authorization?: core.Supplier<string>;
  appId: RavenApi.ids.AppId;
  _body: RavenApi.user.CreateUserRequest;
}

export type Response = core.APIResponse<RavenApi.user.RavenUser, RavenApi.user.createOrUpdate.Error>;
export type Error = Error.AppNotFoundError | Error._Unknown;

export declare namespace Error {
  interface AppNotFoundError extends _Utils {
    errorName: "AppNotFoundError";
  }

  interface _Unknown extends _Utils {
    errorName: void;
    content: core.Fetcher.Error;
  }

  interface _Utils {
    _visit: <Result>(visitor: Error._Visitor<Result>) => Result;
  }

  interface _Visitor<Result> {
    appNotFoundError: () => Result;
    _other: (value: core.Fetcher.Error) => Result;
  }
}

export const Error = {
  appNotFoundError: (): Error.AppNotFoundError => {
    const valueWithoutVisit: Omit<Error.AppNotFoundError, "_visit"> = {
      errorName: "AppNotFoundError",
    };
    Object.defineProperty(valueWithoutVisit, "_visit", {
      enumerable: false,
      writable: true,
    });
    const castedValue = valueWithoutVisit as Error.AppNotFoundError;
    castedValue._visit = (visitor) => visitor.appNotFoundError();
    return castedValue;
  },
} as const;
