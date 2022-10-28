/**
 * This file auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { Client as DeviceClient } from "./resources/device/client/Client";
import { Client as EventClient } from "./resources/event/client/Client";
import { Client as UserClient } from "./resources/user/client/Client";

export declare namespace RavenApiClient {
  interface Options {
    environment?: environments.Environment | string;
    auth?: {
      authorization?: core.Supplier<string>;
    };
  }
}

export class RavenApiClient {
  constructor(private readonly options: RavenApiClient.Options) {}

  #device: DeviceClient | undefined;

  public get device(): DeviceClient {
    return (this.#device ??= new DeviceClient(this.options));
  }

  #event: EventClient | undefined;

  public get event(): EventClient {
    return (this.#event ??= new EventClient(this.options));
  }

  #user: UserClient | undefined;

  public get user(): UserClient {
    return (this.#user ??= new UserClient(this.options));
  }
}