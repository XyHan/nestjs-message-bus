import { CommandIdentifier } from '../../../message-bus/identifier/command.identifier';
import { Name } from '../../../message-bus/value-object/name.value-object';
import { Version } from '../../../message-bus/value-object/version.value-object';
import { SampleCommandHandler } from './sample.command-handler';
import { CommandHandler } from '../../../message-bus/decorator/command-handler.decorator';
import { CommandInterface } from '../../../message-bus/command/command.interface';

@CommandHandler(SampleCommandHandler)
export class SampleCommand implements CommandInterface {
  id: CommandIdentifier = CommandIdentifier.generate();
  name: Name = Name.fromString(this.constructor.name);
  version: Version = Version.fromNumber(1);
}
