import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotherBoardComponent } from './mother-board.component';

describe('MotherBoardComponent', () => {
  let component: MotherBoardComponent;
  let fixture: ComponentFixture<MotherBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotherBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotherBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
