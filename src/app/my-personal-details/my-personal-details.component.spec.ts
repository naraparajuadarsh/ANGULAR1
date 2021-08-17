import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPersonalDetailsComponent } from './my-personal-details.component';

describe('MyPersonalDetailsComponent', () => {
  let component: MyPersonalDetailsComponent;
  let fixture: ComponentFixture<MyPersonalDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPersonalDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPersonalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
