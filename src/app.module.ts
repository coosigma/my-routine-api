import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { UserResolver } from './user/user.resolver';
import { RoutineResolver } from './routine/routine.resolver';
import { EventResolver } from './event/event.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      debug: true,
      playground: true,
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    UserResolver,
    RoutineResolver,
    EventResolver,
  ],
})
export class AppModule {}
