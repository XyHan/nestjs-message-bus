import { MiddlewareInterface } from '../../../message-bus/middleware/middleware';
import { MessageInterface } from '../../../message-bus/message.interface';

export class HandleMiddleware implements MiddlewareInterface {
  apply(command: MessageInterface): MessageInterface {
    console.log('HandleMiddleware - SUCCESS')

    return command;
  }
}
