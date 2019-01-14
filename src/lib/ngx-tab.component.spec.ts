import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTabComponent } from './ngx-tab.component';

describe('NgxTabComponent', () => {
  let component: NgxTabComponent;
  let fixture: ComponentFixture<NgxTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
