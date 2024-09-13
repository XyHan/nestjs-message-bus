import { Observable } from 'rxjs';
import { Inject, Injectable } from '@nestjs/common';
import { MessageBusInterface } from '../../message-bus/bus/message.bus';
import { CommandBus as DomainCommandBus } from '../../message-bus/bus/command.bus';
import { MiddlewareStack } from '../../message-bus/middleware/middleware.stack';
import { CommandInterface } from '../../message-bus/command/command.interface';
import { ContainerInterface } from '../../message-bus/service/container.interface';
import { ModuleRefAdapter } from '../adapter/module-ref.adapter';

@Injectable()
export class CommandBus implements MessageBusInterface {
  private readonly commandBus: MessageBusInterface;

  constructor(
    @Inject(ModuleRefAdapter) container: ContainerInterface,
    @Inject('COMMAND_BUS_MIDDLEWARES') middlewares: MiddlewareStack
  ) {
    this.commandBus = new DomainCommandBus(container, middlewares);
  }

  execute(command: CommandInterface): Observable<any> {
    return this.commandBus.execute(command);
  }
}
