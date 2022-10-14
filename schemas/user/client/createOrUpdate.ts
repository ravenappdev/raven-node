/**
 * This file auto-generated by Fern from our API Definition.
 */

import { RavenApi } from "../../..";
import * as core from "../../../core";

export const Error: core.schemas.Schema<Error.Raw, RavenApi.user.createOrUpdate.Error> = core.schemas
  .union("errorName", {
    AppNotFoundError: core.schemas.object({}),
  })
  .transform<RavenApi.user.createOrUpdate.Error>({
    parse: (value) => {
      switch (value.errorName) {
        case "AppNotFoundError": {
          return {
            ...value,
            _visit: (visitor) => visitor.appNotFoundError(),
          };
        }
      }
    },
    json: (value) => value as any,
  });

export declare namespace Error {
  type Raw = Error.AppNotFoundError;

  interface AppNotFoundError {
    errorName: "AppNotFoundError";
  }
}
