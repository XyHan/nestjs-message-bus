import { Name } from '../value-object/name.value-object';
import { Version } from '../value-object/version.value-object';
import { MessageInterface } from '../message.interface';
import { QueryIdentifier } from '../identifier/query.identifier';

export interface QueryInterface extends MessageInterface {
  readonly id: QueryIdentifier;
  readonly name: Name;
  readonly version: Version;
}
