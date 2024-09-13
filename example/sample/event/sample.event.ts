import { Name } from '../../../message-bus/value-object/name.value-object';
import { Version } from '../../../message-bus/value-object/version.value-object';
import { SampleEventHandler } from './sample.event-handler';
import { EventIdentifier } from '../../../message-bus/identifier/event.identifier';
import { EventInterface } from '../../../message-bus/event/event.interface';
import { EventHandler } from '../../../message-bus/decorator/event-handler.decorator';

@EventHandler(SampleEventHandler)
export class SampleEvent implements EventInterface {
  id: EventIdentifier = EventIdentifier.generate();
  name: Name = Name.fromString(this.constructor.name);
  version: Version = Version.fromNumber(1);
}
