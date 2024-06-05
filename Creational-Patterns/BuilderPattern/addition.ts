import { Operation } from './operation';

export class Addition implements Operation {
    performOperation(x: number, y: number): number {
        return x + y;
    }
}
