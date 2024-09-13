import { CommandHandlerInterface } from '../command/command-handler.interface';
import { QueryHandlerInterface } from '../query/query-handler.interface';
import { EventHandlerInterface } from '../event/event-handler.interface';

export interface ContainerInterface {
  get(handler: CommandHandlerInterface | QueryHandlerInterface | EventHandlerInterface): any;
}
