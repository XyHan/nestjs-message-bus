import { v4 } from 'uuid';
import { Identifier } from './identifier';

export class EventIdentifier implements Identifier {
  private constructor(public readonly value: string) {}

  static fromString(value: string): EventIdentifier {
    return new EventIdentifier(value);
  }

  static generate(): EventIdentifier {
    return new EventIdentifier(v4());
  }

  toString(): string {
    return this.value;
  }
}
