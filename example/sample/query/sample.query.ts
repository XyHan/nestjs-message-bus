import { Name } from '../../../message-bus/value-object/name.value-object';
import { Version } from '../../../message-bus/value-object/version.value-object';
import { SampleQueryHandler } from './sample.query-handler';
import { QueryIdentifier } from '../../../message-bus/identifier/query.identifier';
import { QueryHandler } from '../../../message-bus/decorator/query-handler.decorator';
import { QueryInterface } from '../../../message-bus/query/query.interface';

@QueryHandler(SampleQueryHandler)
export class SampleQuery implements QueryInterface {
  id: QueryIdentifier = QueryIdentifier.generate();
  name: Name = Name.fromString(this.constructor.name);
  version: Version = Version.fromNumber(1);
}
