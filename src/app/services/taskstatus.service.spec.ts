import { TestBed } from '@angular/core/testing';

import { TaskstatusService } from './taskstatus.service';

describe('TaskstatusService', () => {
  let service: TaskstatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskstatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
