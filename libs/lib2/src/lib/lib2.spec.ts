import { add, multiply } from './lib2';

describe('lib2', () => {
  it('should add numbers correctly', () => {
    expect(add(2, 3)).toEqual(5);
  });

  it('should multiply numbers correctly', () => {
    expect(multiply(4, 5)).toEqual(20);
  });
});
