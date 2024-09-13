import { QueryInterface } from './query.interface';
import { MessageHandlerInterface } from '../message-handler.interface';

export interface QueryHandlerInterface extends MessageHandlerInterface {
  handle(query: QueryInterface): any | Promise<any>;
}
