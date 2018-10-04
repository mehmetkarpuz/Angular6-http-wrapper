import { HttpwrapperModule } from './httpwrapper.module';

describe('HttpwrapperModule', () => {
  let httpwrapperModule: HttpwrapperModule;

  beforeEach(() => {
    httpwrapperModule = new HttpwrapperModule();
  });

  it('should create an instance', () => {
    expect(httpwrapperModule).toBeTruthy();
  });
});
