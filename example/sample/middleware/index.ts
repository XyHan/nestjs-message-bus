import { HandleMiddleware } from './handle.middleware';
import { SampleMiddleware } from './sample.middleware';
import { ErrorMiddleware } from './error.middleware';

export const busMiddlewares = [
  new HandleMiddleware(),
  new SampleMiddleware(),
  new ErrorMiddleware()
];

export const busMiddlewaresNoError = [
  new HandleMiddleware(),
  new SampleMiddleware(),
];
