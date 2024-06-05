class Purchase {
  constructor(private amount: number) {}

  public getAmount(): number {
    return this.amount;
  }

  public setAmount(amount: number): void {
    this.amount = amount;
  }

  public saveState(): PurchaseState {
    return new PurchaseState(this.amount);
  }

  public restoreState(state: PurchaseState): void {
    this.amount = state.getAmount();
  }
}

class PurchaseState {
  constructor(private amount: number) {}

  public getAmount(): number {
    return this.amount;
  }
}

class PurchaseHistory {
  private states: PurchaseState[] = [];

  public addState(state: PurchaseState): void {
    this.states.push(state);
  }

  public getState(index: number): PurchaseState {
    return this.states[index];
  }
}

function main() {
  const purchase = new Purchase(0);
  const history = new PurchaseHistory();

  purchase.setAmount(500);
  console.log("Initial Purchase Amount:", purchase.getAmount());

  history.addState(purchase.saveState());

  purchase.setAmount(1000);
  console.log("Updated Purchase Amount:", purchase.getAmount());

  const initialState = history.getState(0);
  purchase.restoreState(initialState);
  console.log("Restored Purchase Amount:", purchase.getAmount());
}

main();
