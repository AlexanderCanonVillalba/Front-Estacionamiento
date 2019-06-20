import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSalidasComponent } from './form-salidas.component';

describe('FormSalidasComponent', () => {
  let component: FormSalidasComponent;
  let fixture: ComponentFixture<FormSalidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSalidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSalidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
