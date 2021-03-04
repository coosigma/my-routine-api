/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  Injectable,
  OnModuleInit,
  OnModuleDestroy,
  // Inject
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy {
  constructor() {
    super();
  }
  async onModuleInit() {
    await this.$connect();
    // this.options.logger.info('Prisma connected!');
  }
  async onModuleDestroy() {
    await this.$disconnect();
  }
}
