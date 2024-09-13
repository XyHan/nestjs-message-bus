import { Name } from './value-object/name.value-object';
import { Version } from './value-object/version.value-object';
import { Identifier } from './identifier/identifier';

export interface MessageInterface {
  readonly id: Identifier;
  readonly name: Name;
  readonly version: Version;
}
