interface CustomElement {
  tagName: string;
  accept(visitor: IVisitor): void;
}

class PElement implements CustomElement {
  tagName: string = "p";
  accept(visitor: IVisitor) {
    visitor.visitPElement(this);
  }
}

class AElement implements CustomElement {
  tagName: string = "a";
  accept(visitor: IVisitor) {
    visitor.visitAElement(this);
  }
}

class BodyElement implements CustomElement {
  tagName: string = "body";
  children: CustomElement[] = [];
  accept(visitor: IVisitor) {
    visitor.visitBodyElement(this);
  }
}

interface IVisitor {
  visitPElement(element: PElement): void;
  visitAElement(element: AElement): void;
  visitBodyElement(element: BodyElement): void;
}

class Render implements IVisitor {
  visitPElement(element: PElement) {
    console.log(`Render ${element.tagName}`);
  }

  visitAElement(element: AElement) {
    console.log(`Render ${element.tagName}`);
  }

  visitBodyElement(element: BodyElement) {
    console.log(`Render ${element.tagName}`);
    element.children.forEach((child) => {
      child.accept(this);
    });
  }
}

// Usage
const body = new BodyElement();
body.children.push(new AElement());
body.children.push(new PElement());

const renderVisitor = new Render();
body.accept(renderVisitor);