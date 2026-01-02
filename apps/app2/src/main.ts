import { add, multiply } from 'lib2';
import { formatString, reverseString } from 'lib3';

console.log('=== App2 Demo ===');
console.log(`10 + 20 = ${add(10, 20)}`);
console.log(`10 * 20 = ${multiply(10, 20)}`);
console.log(formatString('  hello nx monorepo  '));
console.log(reverseString('TypeScript'));

