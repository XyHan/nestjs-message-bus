import { MessageInterface } from '../message.interface';

export interface MiddlewareInterface {
  apply(message: MessageInterface): MessageInterface;
}
