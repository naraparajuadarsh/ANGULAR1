import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyReviewDetailsComponent } from './my-review-details.component';

describe('MyReviewDetailsComponent', () => {
  let component: MyReviewDetailsComponent;
  let fixture: ComponentFixture<MyReviewDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyReviewDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyReviewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
