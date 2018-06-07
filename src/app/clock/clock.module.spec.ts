import { ClockModule } from './clock.module';

describe('ClockModule', () => {
  let clockModule: ClockModule;

  beforeEach(() => {
    clockModule = new ClockModule();
  });

  it('should create an instance', () => {
    expect(clockModule).toBeTruthy();
  });
});
