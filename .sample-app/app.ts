import { RavenApi } from "..";

void main();

async function main() {
  const ravenToken = process.env.RAVEN_TOKEN;
  if (ravenToken == null) {
    console.error("RAVEN_TOKEN environment variable not set.");
    return;
  }

  const ravenAppId = process.env.RAVEN_APP_ID;
  if (ravenAppId == null) {
    console.error("RAVEN_APP_ID environment variable not set.");
    return;
  }

  const raven = new RavenApi.Client({
    _origin: "https://api.ravenapp.dev",
    authorization: `AuthKey ${ravenToken}`,
  });

  const sendEventResponse = await raven.event.send({
    appId: ravenAppId,
    _body: {
      event: "sample",
      data: {
        name: "John Doe",
      },
      user: {
        userId: "userId",
      },
    },
  });
  if (!sendEventResponse.ok) {
    throw new Error(
      `sendEvent failed with ${JSON.stringify(sendEventResponse.error)}`
    );
  }
  console.log(`The id of the event is ${sendEventResponse.body.id}`);
}
