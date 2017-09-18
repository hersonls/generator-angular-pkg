import { TestBed, inject } from '@angular/core/testing';

import { <%= props.moduleName %>Service } from './<%= props.name %>.service';

describe('<%= props.moduleName %>Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [<%= props.moduleName %>Service]
    });
  });

  it('should be created', inject([<%= props.moduleName %>Service], (service: <%= props.moduleName %>Service) => {
    expect(service).toBeTruthy();
  }));
});
