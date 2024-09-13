import { ContainerInterface } from '../../message-bus/service/container.interface';
import { Injectable } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';

@Injectable()
export class ModuleRefAdapter implements ContainerInterface {
  constructor(private readonly moduleRef: ModuleRef) {}

  get(service: any): any {
    return this.moduleRef.get(service, { strict: false });
  }
}
