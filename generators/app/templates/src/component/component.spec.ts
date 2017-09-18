import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { <%= props.moduleName %>Component } from './<%= props.name %>.component';

describe('<%= props.moduleName %>Component', () => {
  let component: <%= props.moduleName %>Component;
  let fixture: ComponentFixture<<%= props.moduleName %>Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ <%= props.moduleName %>Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(<%= props.moduleName %>Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
