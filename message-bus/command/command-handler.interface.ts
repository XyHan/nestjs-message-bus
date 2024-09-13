import { CommandInterface } from './command.interface';
import { MessageHandlerInterface } from '../message-handler.interface';

export interface CommandHandlerInterface extends MessageHandlerInterface {
  handle(command: CommandInterface): any | Promise<any>;
}
