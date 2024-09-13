import { Name } from '../value-object/name.value-object';
import { Version } from '../value-object/version.value-object';
import { MessageInterface } from '../message.interface';
import { EventIdentifier } from '../identifier/event.identifier';

export interface EventInterface extends MessageInterface {
  readonly id: EventIdentifier;
  readonly name: Name;
  readonly version: Version;
}
