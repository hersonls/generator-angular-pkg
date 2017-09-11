import { <%= props.moduleName %>Directive } from './<%= props.name %>.directive';

describe('<%= props.moduleName %>Directive', () => {
  it('should create an instance', () => {
    const directive = new <%= props.moduleName %>Directive();
    expect(directive).toBeTruthy();
  });
});
