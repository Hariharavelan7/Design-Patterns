import { Addition } from './addition';
import { Subtraction } from './subtraction';
import { Multiplication } from './multiplication';
import { Division } from './division';

const addition = new Addition();
console.log('Addition:', addition.performOperation(5, 3));

const subtraction = new Subtraction();
console.log('Subtraction:', subtraction.performOperation(5, 3));

const multiplication = new Multiplication();
console.log('Multiplication:', multiplication.performOperation(5, 3));

const division = new Division();
console.log('Division:', division.performOperation(10, 2));
