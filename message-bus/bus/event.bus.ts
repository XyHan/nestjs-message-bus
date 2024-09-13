import { mergeMap, Observable } from 'rxjs';
import { MessageBusInterface, MessageBus } from './message.bus';
import { MiddlewareStack } from '../middleware/middleware.stack';
import { EventInterface } from '../event/event.interface';
import { ContainerInterface } from '../service/container.interface';
import { EventHandlerInterface } from '../event/event-handler.interface';

export class EventBus implements MessageBusInterface {
  private readonly _messageBus: MessageBusInterface;

  constructor(
    private readonly _container: ContainerInterface,
    middlewares: MiddlewareStack
  ) {
    this._messageBus = new MessageBus(middlewares);
  }

  execute(event: EventInterface): Observable<any> {
    return this._messageBus
      .execute(event)
      .pipe(
        mergeMap(async (event: EventInterface) => {
          if (Reflect.getMetadata('noHandler', event.constructor) !== undefined) return;

          const handler: { handler: EventHandlerInterface } | undefined = Reflect.getMetadata(
            'eventHandler',
            event.constructor
          );
          if (handler === undefined) throw new Error(`Handler not found for ${event.name.value}`);

          const handlerProvider: EventHandlerInterface = this._container.get(handler.handler);
          if (!handlerProvider) throw new Error(`Handler provider not found for ${event.name.value}`);

          return handlerProvider.handle(event);
        })
      );
  }
}
