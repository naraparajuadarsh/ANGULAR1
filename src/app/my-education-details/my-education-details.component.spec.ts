import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyEducationDetailsComponent } from './my-education-details.component';

describe('MyEducationDetailsComponent', () => {
  let component: MyEducationDetailsComponent;
  let fixture: ComponentFixture<MyEducationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyEducationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyEducationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
