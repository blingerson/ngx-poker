import { PotModule } from './pot.module';

describe('PotModule', () => {
  let potModule: PotModule;

  beforeEach(() => {
    potModule = new PotModule();
  });

  it('should create an instance', () => {
    expect(potModule).toBeTruthy();
  });
});
