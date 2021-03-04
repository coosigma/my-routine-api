import { Query, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { User } from '../models/user.model';
import { PrismaService } from '../prisma/prisma.service';

@Resolver((of) => User)
export class UserResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query((returns) => [User])
  async users() {
    return this.prisma.user.findMany();
  }

  @ResolveField()
  async routines(@Parent() user: User) {
    return this.prisma.routine.findMany({
      where: { userId: user.id },
    });
  }
}
