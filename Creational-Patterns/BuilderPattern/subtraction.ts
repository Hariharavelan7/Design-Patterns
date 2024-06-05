import { Operation } from './operation';

export class Subtraction implements Operation {
    performOperation(x: number, y: number): number {
        return x - y;
    }
}
