interface SupportHandler {
  setNextHandler(handler: SupportHandler): SupportHandler;
  processRequest(request: string): string;
}

abstract class BaseSupportHandler implements SupportHandler {
  private nextHandler: SupportHandler | null = null;

  public setNextHandler(handler: SupportHandler): SupportHandler {
    this.nextHandler = handler;
    return handler;
  }

  public processRequest(request: string): string {
    if (this.nextHandler) {
      return this.nextHandler.processRequest(request);
    }
    return 'Unable to handle this request';
  }
}

class BasicSupport extends BaseSupportHandler {
  public processRequest(request: string): string {
    if (request === 'simple') {
      return `Basic support: Resolving ${request} issue`;
    }
    return super.processRequest(request);
  }
}

class IntermediateSupport extends BaseSupportHandler {
  public processRequest(request: string): string {
    if (request === 'moderate') {
      return `Intermediate support: Resolving ${request} issue`;
    }
    return super.processRequest(request);
  }
}

class AdvancedSupport extends BaseSupportHandler {
  public processRequest(request: string): string {
    if (request === 'complex') {
      return `Advanced support: Resolving ${request} issue`;
    }
    return super.processRequest(request);
  }
}

  const basicSupport = new BasicSupport();
  const intermediateSupport = new IntermediateSupport();
  const advancedSupport = new AdvancedSupport();

  basicSupport.setNextHandler(intermediateSupport).setNextHandler(advancedSupport);

  const supportRequests = ['simple', 'moderate', 'complex', 'unknown'];

  for (const request of supportRequests) {
    console.log(`Request: ${request}`);
    const result = basicSupport.processRequest(request);
    console.log(`Response: ${result}\n`);
  }
