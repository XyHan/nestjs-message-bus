import { MessageInterface } from './message.interface';

export interface MessageHandlerInterface {
  handle(message: MessageInterface): any | Promise<any>;
}
