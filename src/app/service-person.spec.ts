import { TestBed } from '@angular/core/testing';
import { ServicePerson } from './service-person';

describe('ServicePerson', () => {
  let service: ServicePerson;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicePerson);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
