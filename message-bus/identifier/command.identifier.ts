import { v4 } from 'uuid';
import { Identifier } from './identifier';

export class CommandIdentifier implements Identifier {
  private constructor(public readonly value: string) {}

  static fromString(value: string): CommandIdentifier {
    return new CommandIdentifier(value);
  }

  static generate(): CommandIdentifier {
    return new CommandIdentifier(v4());
  }

  toString(): string {
    return this.value;
  }
}
