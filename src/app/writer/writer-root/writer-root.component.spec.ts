import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriterRootComponent } from './writer-root.component';

describe('WriterRootComponent', () => {
  let component: WriterRootComponent;
  let fixture: ComponentFixture<WriterRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriterRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriterRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
