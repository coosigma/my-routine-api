import { Test, TestingModule } from '@nestjs/testing';
import { RoutineResolver } from './routine.resolver';

describe('RoutineResolver', () => {
  let resolver: RoutineResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoutineResolver],
    }).compile();

    resolver = module.get<RoutineResolver>(RoutineResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
