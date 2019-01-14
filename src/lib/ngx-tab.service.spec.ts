import { TestBed } from '@angular/core/testing';

import { NgxTabService } from './ngx-tab.service';

describe('NgxTabService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxTabService = TestBed.get(NgxTabService);
    expect(service).toBeTruthy();
  });
});
