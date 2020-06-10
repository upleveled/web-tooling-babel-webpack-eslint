import { sum } from './b.js';

const cartTotal = sum(10, -10);
const cartTotal2 = sum(10, -10);
const cartTotalMessage =
  cartTotal != null ? cartTotal : 'You have no items in cart';

console.log(cartTotal2);
console.log(cartTotalMessage);
