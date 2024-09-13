import { MiddlewareInterface } from '../../../message-bus/middleware/middleware';
import { MessageInterface } from '../../../message-bus/message.interface';

export class ErrorMiddleware implements MiddlewareInterface {
  apply(command: MessageInterface): MessageInterface {
    throw new Error('ErrorMiddleware SAMPLE ERROR');
  }
}
