# Raven Node Library

The Raven Node library provides access to the Raven API from JavaScript/TypeScript.

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

if (!createUserResponse.ok) {
  throw new Error(`Failed to create user: ${createUserResponse.error}`);
}

console.log(createUserResponse.body);
```

## Sample App

Checkout the [sample app](.sample-app/app.ts) which consumes this SDK!

```
cd .sample-app
yarn install
yarn start
```

\_Note: The Sample App requires you setting RAVEN_TOKEN and RAVEN_APP_ID

## SDK Examples

Below are a few examples of how to use the SDK to hit different endpoints. Checkout our [API Reference](https://docs.ravenapp.dev/) to see all of our endpoints.

### Add Device

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

if (!addDeviceResponse.ok) {
  throw new Error(`addDevice failed with ${addDeviceResponse.error}`);
}

console.log(addDeviceResponse.body);
```

### Send Event

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

if (!sendEventResponse.ok) {
  throw new Error(
    `sendEvent failed with ${JSON.stringify(sendEventResponse.error)}`
  );
}

console.log(`The id of the event is ${sendEventResponse.body.id}`);
```
