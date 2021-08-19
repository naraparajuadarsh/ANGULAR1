import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDemoTableComponent } from './my-demo-table.component';

describe('MyDemoTableComponent', () => {
  let component: MyDemoTableComponent;
  let fixture: ComponentFixture<MyDemoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDemoTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDemoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
