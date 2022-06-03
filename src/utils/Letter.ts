export default class Letter {
  private elements: Element[] = [];

  constructor(element: HTMLElement) {
    const text = element.innerText.split(" ");
    for (let i = 0; i < text.length; i++) {
      if (i < 1) {
        element.innerText = "";
      }
      const span = document.createElement("span");
      if (text[i] === "Harsh") {
        this.addClass(span);
      }
      if (text[i] === "Bararia") {
        this.addClass(span);
      }
      span.innerText = text[i];
      element.appendChild(span);
      this.elements.push(span);
      continue;
    }
  }

  get listAll(): Element[] {
    return this.elements;
  }

  addClass(element: HTMLElement) {
    element.classList.add("primary");
  }
}
