import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidaCepComponent } from './valida-cep.component';

describe('ValidaCepComponent', () => {
  let component: ValidaCepComponent;
  let fixture: ComponentFixture<ValidaCepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidaCepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidaCepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
