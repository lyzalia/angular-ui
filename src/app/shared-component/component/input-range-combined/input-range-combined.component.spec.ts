import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputRangeCombinedComponent } from './input-range-combined.component';

describe('InputRangeCombinedComponent', () => {
  let component: InputRangeCombinedComponent;
  let fixture: ComponentFixture<InputRangeCombinedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputRangeCombinedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputRangeCombinedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
