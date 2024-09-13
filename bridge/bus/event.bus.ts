import { Observable } from 'rxjs';
import { Inject, Injectable } from '@nestjs/common';
import { MessageBusInterface } from '../../message-bus/bus/message.bus';
import { EventBus as DomainEventBus } from '../../message-bus/bus/event.bus';
import { MiddlewareStack } from '../../message-bus/middleware/middleware.stack';
import { EventInterface } from '../../message-bus/event/event.interface';
import { ModuleRefAdapter } from '../adapter/module-ref.adapter';
import { ContainerInterface } from '../../message-bus/service/container.interface';

@Injectable()
export class EventBus implements MessageBusInterface {
  private readonly _eventBus: MessageBusInterface;

  constructor(
    @Inject(ModuleRefAdapter) moduleRef: ContainerInterface,
    @Inject('EVENT_BUS_MIDDLEWARES') middlewares: MiddlewareStack
  ) {
    this._eventBus = new DomainEventBus(moduleRef, middlewares);
  }

  execute(event: EventInterface): Observable<any> {
    return this._eventBus.execute(event);
  }
}
