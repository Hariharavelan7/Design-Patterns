import { Operation } from './operation';

export class Division implements Operation {
    performOperation(x: number, y: number): number {
        if (y === 0) {
            throw new Error("Division by zero is not allowed");
        }
        return x / y;
    }
}
