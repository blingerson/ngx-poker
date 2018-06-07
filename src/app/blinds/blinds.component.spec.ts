import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlindsComponent } from './blinds.component';
import { BlindsModule } from 'src/app/blinds/blinds.module';

describe('BlindsComponent', () => {
  let component: BlindsComponent;
  let fixture: ComponentFixture<BlindsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ BlindsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlindsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
