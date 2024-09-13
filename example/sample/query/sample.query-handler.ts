import { Injectable } from '@nestjs/common';
import { QueryInterface } from '../../../message-bus/query/query.interface';
import { QueryHandlerInterface } from '../../../message-bus/query/query-handler.interface';

@Injectable()
export class SampleQueryHandler implements QueryHandlerInterface {
  handle(query: QueryInterface): Promise<any> {
    return Promise.resolve('OK QUERY');
  }
}
