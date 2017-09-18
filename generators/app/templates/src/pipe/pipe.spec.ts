import { <%= props.moduleName %>Pipe } from './<%= props.name %>.pipe';

describe('<%= props.moduleName %>Pipe', () => {
  it('create an instance', () => {
    const pipe = new <%= props.moduleName %>Pipe();
    expect(pipe).toBeTruthy();
  });
});
