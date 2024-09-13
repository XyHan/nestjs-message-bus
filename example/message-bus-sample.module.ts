import { Module } from '@nestjs/common';
import { SampleController } from './sample/sample.controller';
import { MessageBusModule } from '../bridge/message-bus.module';
import { busMiddlewares, busMiddlewaresNoError } from './sample/middleware';
import { commandHandlers } from './sample/command';
import { queryHandlers } from './sample/query';
import { eventHandlers } from './sample/event';

@Module({
  imports: [
    MessageBusModule.registerMiddlewares({
      commandBus: busMiddlewares,
      queryBus: busMiddlewares,
      eventBus: busMiddlewaresNoError
    })
  ],
  controllers: [SampleController],
  providers: [
    ...commandHandlers,
    ...queryHandlers,
    ...eventHandlers,
  ]
})
export class MessageBusSampleModule {}
