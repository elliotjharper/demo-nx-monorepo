import { formatString, reverseString } from './lib3';

describe('lib3', () => {
  it('should format string correctly', () => {
    expect(formatString('  hello  ')).toEqual('HELLO');
  });

  it('should reverse string correctly', () => {
    expect(reverseString('abc')).toEqual('cba');
  });
});
