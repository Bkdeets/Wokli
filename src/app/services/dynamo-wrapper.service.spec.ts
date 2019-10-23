import { TestBed } from '@angular/core/testing';

import { DynamoWrapperService } from './dynamo-wrapper.service';

describe('DynamoWrapperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DynamoWrapperService = TestBed.get(DynamoWrapperService);
    expect(service).toBeTruthy();
  });
});
