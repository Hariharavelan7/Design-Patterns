import { Operation } from './operation';

export class Multiplication implements Operation {
    performOperation(x: number, y: number): number {
        return x * y;
    }
}
