export class SelectedProduct {
  create(img, description) {
    this._item = document.createElement('img');

    this._item.classList.add('current-product__img');

    this._item.src = img;
    this._item.alt = description;

    return this._item;
  }

  showAnimation() {
    this._item.classList.add('current-product__img_animation');
  }

  remove() {
    this._item && this._item.remove();
    this._item = null;
  }
}
