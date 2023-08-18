import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Womenmurders1Component } from './womenmurders1.component';

describe('Womenmurders1Component', () => {
  let component: Womenmurders1Component;
  let fixture: ComponentFixture<Womenmurders1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Womenmurders1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Womenmurders1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
