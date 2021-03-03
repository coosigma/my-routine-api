/* eslint-disable @typescript-eslint/no-unused-vars */
import { Routine } from './routine.model';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field((type) => Int)
  id: number;
  @Field((type) => String)
  email: string;
  @Field((type) => String, { nullable: true })
  user?: string;
  @Field((type) => String)
  password: string;
  @Field((type) => [Routine])
  routines: Routine[];
}
