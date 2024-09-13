import { map, Observable, of } from 'rxjs';
import { MessageInterface } from '../message.interface';
import { MiddlewareStack } from '../middleware/middleware.stack';

export interface MessageBusInterface {
  execute(command: MessageInterface): Observable<any>;
}

export class MessageBus implements MessageBusInterface {
  constructor(private readonly middlewareStack: MiddlewareStack) {}

  execute(message: MessageInterface): Observable<any> {
    return of(message).pipe(
      map((message: MessageInterface) => {
        this.middlewareStack.rewind();

        let next = this.middlewareStack.next();
        while (next.done === false) {
          next.value.apply(message);
          next = this.middlewareStack.next();
        }

        return message;
      },
    ));
  }
}
