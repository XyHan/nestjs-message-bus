import { MiddlewareInterface } from './middleware';

function* stack(middlewares: MiddlewareInterface[]): Generator<MiddlewareInterface> {
  for (let i = 0; i <= middlewares.length; i++) {
    yield middlewares[i];
  }
}

export class MiddlewareStack implements Iterator<MiddlewareInterface> {
  private stack: Generator<MiddlewareInterface>;

  constructor(private readonly middlewares: MiddlewareInterface[]) {
    this.stack = stack(middlewares);
  }

  rewind(): void {
    this.stack = stack(this.middlewares);
  }

  next(...args: [] | [undefined]): IteratorResult<MiddlewareInterface, any> {
    const next = this.stack.next(args);
    if (next.value === undefined) {
      return {
        value: undefined,
        done: true
      }
    }

    return next;
  }

  return?(value?: any): IteratorResult<MiddlewareInterface, any> {
    return this.stack.return(value);
  }

  throw?(e?: any): IteratorResult<MiddlewareInterface, any> {
    return this.stack.throw(e);
  }
}
