/* eslint-disable @typescript-eslint/no-unused-vars */
import { Event } from './event.model';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Routine {
  @Field((type) => Int)
  id: number;
  @Field((type) => String)
  name: string;
  @Field((type) => String, { nullable: true })
  description?: string;
  @Field((type) => Int)
  userId: number;
  @Field((type) => [Event])
  events: Event[];
}
