import { greet } from './lib1';

describe('lib1', () => {
  it('should greet correctly', () => {
    expect(greet('World')).toEqual('Hello, World! Welcome from lib1.');
  });
});
