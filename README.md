# Raven Node library

[![npm shield](https://img.shields.io/npm/v/@fern-api/raven)](https://www.npmjs.com/package/@fern-api/raven)

The Raven Node.js library provides access to the Raven API from JavaScript/TypeScript.

## Documentation

API documentation is available at https://docs.ravenapp.dev/.

## Sample app

Check out the sample app in your browser [here](https://stackblitz.com/edit/raven-typescript-example?file=app.ts&view=editor) using StackBlitz.

## Usage

```typescript
import { RavenApi } from "raven";

const raven = new RavenApi.Client({
  _origin: "https://api.ravenapp.dev",
  authorization: `AuthKey ${ravenToken}`,
});

const createUserResponse = await raven.user.createOrUpdate({
  appId: ravenAppId,
  _body: {
    userId: "test",
    mobile: "9876543210",
    email: "x@ravenapp.dev",
  },
});

if (createUserResponse.ok) {
  console.log(createUserResponse.body);
} else {
  console.error("Failed to create user", createUserResponse.error);
}
```

## Examples

Below are a few examples of how to use the SDK to hit different endpoints. Check out our [API Reference](https://docs.ravenapp.dev/) to see all of our endpoints.

### Add device

```typescript
const addDeviceResponse = await raven.device.add({
  appId: ravenAppId,
  userId: createUserResponse.body.userId,
  _body: {
    fcmToken:
      "qweKu7bdTZumJpzxUqqpxe:APA91bE9FSScPK_kENPpBAj0URYDo4z0tE6aOrBtpgaA1I1OC7GBes1lR71EWRhavLGMzDMKPPLkUoqtvPHzCgq-8ObU4AOJjbPdpkyRWqc8mqrUV2EkvsziLZvFccwtyI7-lQQhSJDe",
    platform: RavenApi.Platform.Android,
  },
});

if (addDeviceResponse.ok) {
  console.log(addDeviceResponse.body);
} else {
  console.error("Failed to add device", addDeviceResponse.error);
}
```

### Send event

```typescript
const sendEventResponse = await raven.event.send({
  appId: ravenAppId,
  _body: {
    event: "sample_event_1",
    user: {
      mobile: "+919876543210",
      email: "x@ravenapp.dev",
      whatsapp_mobile: "+919876543210", // if empty, `mobile` is considered for whatsapp
    },
    data: {
      name: "John Doe",
      date: "01 December 2020",
    },
  },
});

if (sendEventResponse.ok) {
  console.log(`The id of the event is ${sendEventResponse.body.id}`);
} else {
  console.error("Failed to send event", sendEventResponse.error);
}
```

## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning the package version to a specific version in your package.json file. This way, you can install the same version each time without breaking changes unless you are intentionally looking for the latest version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. Additions made directly to this library would have to be moved over to our generation code, otherwise they would be overwritten upon the next generated release. Feel free to open a PR as a proof of concept, but know that we will not be able to merge it as-is. We suggest [opening an issue](https://github.com/ravenappdev/raven-node) first to discuss with us!

On the other hand, contributions to the README are always very welcome!
