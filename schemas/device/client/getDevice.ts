/**
 * This file auto-generated by Fern from our API Definition.
 */

import { RavenApi } from "../../..";
import * as core from "../../../core";

export const Error: core.schemas.Schema<Error.Raw, RavenApi.device.getDevice.Error> = core.schemas
  .union("errorName", {
    AppNotFoundError: core.schemas.object({}),
    DeviceNotFoundError: core.schemas.object({}),
  })
  .transform<RavenApi.device.getDevice.Error>({
    parse: (value) => {
      switch (value.errorName) {
        case "AppNotFoundError": {
          return {
            ...value,
            _visit: (visitor) => visitor.appNotFoundError(),
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
  type Raw = Error.AppNotFoundError | Error.DeviceNotFoundError;

  interface AppNotFoundError {
    errorName: "AppNotFoundError";
  }

  interface DeviceNotFoundError {
    errorName: "DeviceNotFoundError";
  }
}
