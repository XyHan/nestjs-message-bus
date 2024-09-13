import { MiddlewareInterface } from '../../../message-bus/middleware/middleware';
import { MessageInterface } from '../../../message-bus/message.interface';

export class SampleMiddleware implements MiddlewareInterface {
  apply(command: MessageInterface): MessageInterface {
    console.log('SampleMiddleware - SUCCESS')

    return command;
  }
}
