import JSDOMEnvironment from 'jest-environment-jsdom';
import type { EnvironmentContext, JestEnvironmentConfig } from '@jest/environment';

export default class JSDOMEnvironmentExtended extends JSDOMEnvironment {
  constructor(config: JestEnvironmentConfig, context: EnvironmentContext) {
    super(config, context);

    this.global.ReadableStream = ReadableStream;
    this.global.TextDecoder = TextDecoder;
    this.global.TextEncoder = TextEncoder;

    this.global.Blob = Blob;
    this.global.File = File;
    this.global.Headers = Headers;
    this.global.FormData = FormData;
    this.global.Request = Request;
    this.global.Response = Response;
    this.global.Request = Request;
    this.global.Response = Response;
    this.global.fetch = fetch;
    this.global.structuredClone = structuredClone;
  }
}
