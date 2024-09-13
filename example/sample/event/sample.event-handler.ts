import { Injectable } from '@nestjs/common';
import { EventHandlerInterface } from '../../../message-bus/event/event-handler.interface';
import { EventInterface } from '../../../message-bus/event/event.interface';

@Injectable()
export class SampleEventHandler implements EventHandlerInterface {
  handle(event: EventInterface): Promise<any> {
    return Promise.resolve('OK EVENT');
  }
}
