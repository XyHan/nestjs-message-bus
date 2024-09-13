import { mergeMap, Observable } from 'rxjs';
import { MessageBusInterface, MessageBus } from './message.bus';
import { MiddlewareStack } from '../middleware/middleware.stack';
import { CommandInterface } from '../command/command.interface';
import { ContainerInterface } from '../service/container.interface';
import { CommandHandlerInterface } from '../command/command-handler.interface';

export class CommandBus implements MessageBusInterface {
  private readonly _messageBus: MessageBusInterface;

  constructor(
    private readonly _container: ContainerInterface,
    middlewares: MiddlewareStack
  ) {
    this._messageBus = new MessageBus(middlewares);
  }

  execute(command: CommandInterface): Observable<any> {
    return this._messageBus
      .execute(command)
      .pipe(
        mergeMap(async () => {
          if (Reflect.getMetadata('noHandler', command.constructor) !== undefined) return;

          const handler: { handler: CommandHandlerInterface } | undefined = Reflect.getMetadata(
            'commandHandler',
            command.constructor
          );
          if (handler === undefined) throw new Error(`Handler not found for ${command.name.value}`);

          const handlerProvider: CommandHandlerInterface = this._container.get(handler.handler);
          if (!handlerProvider) throw new Error(`Handler provider not found for ${command.name.value}`);

          return handlerProvider.handle(command);
        })
      );
  }
}
