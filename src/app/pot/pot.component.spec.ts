import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotComponent } from './pot.component';
import { PotModule } from 'src/app/pot/pot.module';

describe('PotComponent', () => {
  let component: PotComponent;
  let fixture: ComponentFixture<PotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ PotModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
