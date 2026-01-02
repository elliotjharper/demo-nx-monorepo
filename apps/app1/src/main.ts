import { greet } from 'lib1';
import { add, multiply } from 'lib2';

console.log('=== App1 Demo ===');
console.log(greet('World'));
console.log(`5 + 3 = ${add(5, 3)}`);
console.log(`5 * 3 = ${multiply(5, 3)}`);

