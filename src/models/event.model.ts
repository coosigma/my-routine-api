/* eslint-disable @typescript-eslint/no-unused-vars */
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Event {
  @Field((type) => Int)
  id: number;
  @Field((type) => Int)
  routineId: number;
  @Field((type) => Date)
  start_time: Date;
  @Field((type) => Int)
  duration: number;
  @Field((type) => Int)
  quality: number;
}
