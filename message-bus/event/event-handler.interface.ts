import { EventInterface } from './event.interface';
import { MessageHandlerInterface } from '../message-handler.interface';

export interface EventHandlerInterface extends MessageHandlerInterface {
  handle(command: EventInterface): any | Promise<any>;
}
