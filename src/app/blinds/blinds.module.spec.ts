import { BlindsModule } from './blinds.module';

describe('BlindsModule', () => {
  let blindsModule: BlindsModule;

  beforeEach(() => {
    blindsModule = new BlindsModule();
  });

  it('should create an instance', () => {
    expect(blindsModule).toBeTruthy();
  });
});
