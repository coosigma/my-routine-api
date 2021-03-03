import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Routine } from '../models/routine.model';
import { PrismaService } from '../prisma/prisma.service';

@Resolver((of) => Routine)
export class RoutineResolver {
  constructor(private prisma: PrismaService) {}

  @ResolveField()
  async events(@Parent() routine: Routine) {
    return this.prisma.event.findMany({
      where: { routineId: routine.id },
    });
  }
}
