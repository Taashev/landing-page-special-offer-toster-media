export class Display {
  constructor(selector) {
    this._container = document.querySelector(selector);
  }

  show(item) {
    this._container.append(item);
  }

  getContainer() {
    return this._container;
  }
}
