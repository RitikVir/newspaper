import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestStoryComponent } from './request-story.component';

describe('RequestStoryComponent', () => {
  let component: RequestStoryComponent;
  let fixture: ComponentFixture<RequestStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
