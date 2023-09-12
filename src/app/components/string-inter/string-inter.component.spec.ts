import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringInterComponent } from './string-inter.component';

describe('StringInterComponent', () => {
  let component: StringInterComponent;
  let fixture: ComponentFixture<StringInterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StringInterComponent]
    });
    fixture = TestBed.createComponent(StringInterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
