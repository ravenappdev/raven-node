/**
 * This file auto-generated by Fern from our API Definition.
 */

import { RavenApi } from "../../..";
import * as core from "../../../core";

export const Error: core.schemas.Schema<Error.Raw, RavenApi.device.deleteDevice.Error> = core.schemas
  .union("errorName", {
    AppNotFoundError: core.schemas.object({}),
    UserNotFoundError: core.schemas.object({}),
    DeviceNotFoundError: core.schemas.object({}),
  })
  .transform<RavenApi.device.deleteDevice.Error>({
    parse: (value) => {
      switch (value.errorName) {
        case "AppNotFoundError": {
          return {
            ...value,
            _visit: (visitor) => visitor.appNotFoundError(),
          };
        }
        case "UserNotFoundError": {
          return {
            ...value,
            _visit: (visitor) => visitor.userNotFoundError(),
          };
        }
        case "DeviceNotFoundError": {
          return {
            ...value,
            _visit: (visitor) => visitor.deviceNotFoundError(),
          };
        }
      }
    },
    json: (value) => value as any,
  });

export declare namespace Error {
  type Raw = Error.AppNotFoundError | Error.UserNotFoundError | Error.DeviceNotFoundError;

  interface AppNotFoundError {
    errorName: "AppNotFoundError";
  }

  interface UserNotFoundError {
    errorName: "UserNotFoundError";
  }

  interface DeviceNotFoundError {
    errorName: "DeviceNotFoundError";
  }
}
