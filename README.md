# Raven Node library

[![npm shield](https://img.shields.io/npm/v/@ravenapp/raven)](https://www.npmjs.com/package/@ravenapp/raven)

The Raven Node.js library provides access to the Raven API from JavaScript/TypeScript.

## Documentation

API documentation is available at https://docs.ravenapp.dev/.

## Usage

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/raven-typescript-example-yrzyda?file=app.ts&view=editor)

```typescript
import { RavenApiClient } from '@ravenapp/raven';

const raven = new RavenApiClient({
  authorization: `AuthKey YOUR_AUTH_KEY`,
});

const response = await raven.send('YOUR_APP_ID', {
  event: 'Send text message.',
  data: {
    key: 'value',
  },
});

console.log('Received response from Raven', response);
```

## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning the package version to a specific version in your package.json file. This way, you can install the same version each time without breaking changes unless you are intentionally looking for the latest version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. Additions made directly to this library would have to be moved over to our generation code, otherwise they would be overwritten upon the next generated release. Feel free to open a PR as a proof of concept, but know that we will not be able to merge it as-is. We suggest [opening an issue](https://github.com/ravenappdev/raven-node) first to discuss with us!

On the other hand, contributions to the README are always very welcome!
