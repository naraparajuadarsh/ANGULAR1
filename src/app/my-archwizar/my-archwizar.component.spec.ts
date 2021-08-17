import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyArchwizarComponent } from './my-archwizar.component';

describe('MyArchwizarComponent', () => {
  let component: MyArchwizarComponent;
  let fixture: ComponentFixture<MyArchwizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyArchwizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyArchwizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
