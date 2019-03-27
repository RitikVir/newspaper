import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestPollComponent } from './request-poll.component';

describe('RequestPollComponent', () => {
  let component: RequestPollComponent;
  let fixture: ComponentFixture<RequestPollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestPollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
