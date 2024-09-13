import { CommandHandlerInterface } from '../../../message-bus/command/command-handler.interface';
import { Injectable } from '@nestjs/common';
import { CommandInterface } from '../../../message-bus/command/command.interface';

@Injectable()
export class SampleCommandHandler implements CommandHandlerInterface {
  handle(command: CommandInterface): string {
    return 'OK COMMAND';
  }
}
