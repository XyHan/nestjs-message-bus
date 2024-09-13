import { CommandIdentifier } from '../identifier/command.identifier';
import { Name } from '../value-object/name.value-object';
import { Version } from '../value-object/version.value-object';
import { MessageInterface } from '../message.interface';

export interface CommandInterface extends MessageInterface {
  readonly id: CommandIdentifier;
  readonly name: Name;
  readonly version: Version;
}
