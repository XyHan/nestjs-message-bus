import { Controller, Get, Post, Inject } from '@nestjs/common';
import { SampleCommand } from './command/sample.command';
import { map, Observable } from 'rxjs';
import { CommandBus } from '../../bridge/bus/command.bus';
import { QueryBus } from '../../bridge/bus/query.bus';
import { MessageBusInterface } from '../../message-bus/bus/message.bus';
import { SampleQuery } from './query/sample.query';
import { SampleEvent } from './event/sample.event';
import { EventBus } from '../../bridge/bus/event.bus';

@Controller('/')
export class SampleController {
  constructor(
    @Inject(CommandBus) private readonly _commandBus: MessageBusInterface,
    @Inject(QueryBus) private readonly _queryBus: MessageBusInterface,
    @Inject(EventBus) private readonly _eventBus: MessageBusInterface,
  ) {}

  @Post('commandTest')
  public commandTest(): Observable<any> {
    return this._commandBus.execute(new SampleCommand()).pipe(
      map((value: any) => value)
    );
  }

  @Get('queryTest')
  public queryTest(): Observable<any> {
    return this._queryBus.execute(new SampleQuery()).pipe(
      map((value: any) => value)
    );
  }

  @Get('eventTest')
  public eventTest(): Observable<any> {
    return this._eventBus.execute(new SampleEvent()).pipe(
      map((value: any) => value)
    );
  }
}
