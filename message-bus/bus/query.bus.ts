import { mergeMap, Observable } from 'rxjs';
import { MessageBusInterface, MessageBus } from './message.bus';
import { MiddlewareStack } from '../middleware/middleware.stack';
import { ContainerInterface } from '../service/container.interface';
import { QueryInterface } from '../query/query.interface';
import { QueryHandlerInterface } from '../query/query-handler.interface';

export class QueryBus implements MessageBusInterface {
  private readonly _messageBus: MessageBusInterface;

  constructor(
    private readonly _container: ContainerInterface,
    middlewares: MiddlewareStack
  ) {
    this._messageBus = new MessageBus(middlewares);
  }

  execute(query: QueryInterface): Observable<any> {
    return this._messageBus
      .execute(query)
      .pipe(
        mergeMap(async (query: QueryInterface) => {
          if (Reflect.getMetadata('noHandler', query.constructor) !== undefined) return;

          const handler: { handler: QueryHandlerInterface } | undefined = Reflect.getMetadata(
            'queryHandler',
            query.constructor
          );
          if (handler === undefined) throw new Error(`Handler not found for ${query.name.value}`);

          const handlerProvider: QueryHandlerInterface = this._container.get(handler.handler);
          if (!handlerProvider) throw new Error(`Handler provider not found for ${query.name.value}`);

          return handlerProvider.handle(query);
        })
      );
  }
}
