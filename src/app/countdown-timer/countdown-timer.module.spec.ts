import { CountdownTimerModule } from './countdown-timer.module';

describe('CountdownTimerModule', () => {
  let countdownTimerModule: CountdownTimerModule;

  beforeEach(() => {
    countdownTimerModule = new CountdownTimerModule();
  });

  it('should create an instance', () => {
    expect(countdownTimerModule).toBeTruthy();
  });
});
