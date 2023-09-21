export class Product {
  constructor(productInfo, productSelector, handleProductClick) {
    this._productInfo = productInfo;
    this._productSelector = productSelector;

    this._handleProductClick = handleProductClick;
  }

  _getProduct() {
    const element = document
      .querySelector(this._productSelector)
      .content.querySelector('.product__item')
      .cloneNode(true);

    return element;
  }

  getSelectProduct() {
    this._element.classList.add('product__item_select');
  }

  _removeSelectProduct() {
    const parent = this._element.closest('.product__list')

    Array.from(parent.children).forEach((item) => {
      item.classList.remove('product__item_select');
    });
  }

  _setEventListener() {
    this._element.addEventListener('click', () => {
      this._handleProductClick(this._productInfo.images.origin, this._productInfo.description);

      this._removeSelectProduct();
      
      this.getSelectProduct();
    });
  }

  render() {
    this._element = this._getProduct();
    this._img = this._element.querySelector('.product__item-img');

    this._img.src = this._productInfo.images.small;
    this._img.alt = this._productInfo.description;

    this._setEventListener(this._img);

    return this._element;
  }
}
