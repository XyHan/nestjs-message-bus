import { Observable } from 'rxjs';
import { Inject, Injectable } from '@nestjs/common';
import { MessageBusInterface } from '../../message-bus/bus/message.bus';
import { QueryBus as DomainQueryBus } from '../../message-bus/bus/query.bus';
import { MiddlewareStack } from '../../message-bus/middleware/middleware.stack';
import { QueryInterface } from '../../message-bus/query/query.interface';
import { ModuleRefAdapter } from '../adapter/module-ref.adapter';
import { ContainerInterface } from '../../message-bus/service/container.interface';

@Injectable()
export class QueryBus implements MessageBusInterface {
  private readonly messageBus: MessageBusInterface;

  constructor(
    @Inject(ModuleRefAdapter) moduleRef: ContainerInterface,
    @Inject('QUERY_BUS_MIDDLEWARES') middlewares: MiddlewareStack
  ) {
    this.messageBus = new DomainQueryBus(moduleRef, middlewares);
  }

  execute(query: QueryInterface): Observable<any> {
    return this.messageBus.execute(query);
  }
}
