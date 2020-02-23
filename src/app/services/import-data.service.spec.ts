import { TestBed } from '@angular/core/testing';

import { ImportDataService } from './import-data.service';

describe('ImportDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImportDataService = TestBed.get(ImportDataService);
    expect(service).toBeTruthy();
  });
});
