# Raven Node Library

The Raven Node library provides access to the Raven API from JavaScript/TypeScript.


## Documentation

API documentation is available at https://docs.ravenapp.dev/.

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

## Sample app

Check out the [sample app](.sample-app/app.ts) which consumes this SDK!

```bash
export RAVEN_TOKEN=...
export RAVEN_APP_ID=...

yarn install

cd .sample-app
yarn install
yarn start
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

## Questions? Feedback?

Feel free to [leave an issue](https://github.com/fern-api/raven-node) on this repo!
