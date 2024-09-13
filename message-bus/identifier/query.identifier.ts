import { v4 } from 'uuid';
import { Identifier } from './identifier';

export class QueryIdentifier implements Identifier {
  private constructor(public readonly value: string) {}

  static fromString(value: string): QueryIdentifier {
    return new QueryIdentifier(value);
  }

  static generate(): QueryIdentifier {
    return new QueryIdentifier(v4());
  }

  toString(): string {
    return this.value;
  }
}
