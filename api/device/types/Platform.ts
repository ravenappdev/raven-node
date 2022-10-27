/**
 * This file auto-generated by Fern from our API Definition.
 */

export interface Platform<RawValue extends Platform.RawValue = Platform.RawValue> {
  value: RawValue;
  visit: <Result>(visitor: Platform._Visitor<Result>) => Result;
}

const _Android: Platform<"android"> = {
  value: "android",
  visit: (visitor) => visitor.android(),
};
const _Web: Platform<"web"> = {
  value: "web",
  visit: (visitor) => visitor.web(),
};
const _Ios: Platform<"ios"> = {
  value: "ios",
  visit: (visitor) => visitor.ios(),
};
export const Platform = {
  Android: _Android,
  Web: _Web,
  Ios: _Ios,
  _parse: (value: string): Platform => {
    switch (value) {
      case "android": {
        return _Android;
      }
      case "web": {
        return _Web;
      }
      case "ios": {
        return _Ios;
      }
      default: {
        return {
          value: value as Platform.RawValue,
          visit: (visitor) => visitor._other(value),
        };
      }
    }
  },
} as const;

export declare namespace Platform {
  type RawValue = "android" | "web" | "ios";

  interface _Visitor<Result> {
    android: () => Result;
    web: () => Result;
    ios: () => Result;
    _other: (value: string) => Result;
  }
}
