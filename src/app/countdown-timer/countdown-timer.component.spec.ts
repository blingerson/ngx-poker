import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownTimerComponent } from './countdown-timer.component';
import { CountdownTimerModule } from 'src/app/countdown-timer/countdown-timer.module';

describe('CountdownTimerComponent', () => {
  let component: CountdownTimerComponent;
  let fixture: ComponentFixture<CountdownTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ CountdownTimerModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
