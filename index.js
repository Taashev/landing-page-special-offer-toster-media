import { Timer } from "./components/Timer.js";
import { getUTCDateFormat } from "./utils/getUTCDateFormat.js";

import { Product } from "./components/Product.js";
import { Display } from "./components/Display.js";
import { SelectedProduct } from "./components/SelectedProduct.js";

import { INITIAL_TIME_OFFER, INITIAL_DATA } from "./utils/constants.js";

const timerDisplay = document.querySelector('.pinned__text_mod_timer');

const productList = document.querySelector('.product__list');

timerDisplay.textContent = getUTCDateFormat(INITIAL_TIME_OFFER);

const timer = new Timer(INITIAL_TIME_OFFER, (time) => {
  timerDisplay.textContent = time;
});

timer.start();

const display = new Display('.current-product');

const selectedProduct = new SelectedProduct();

function handleProductClick(img, description) {
  selectedProduct.remove();

  const currentImg = selectedProduct.create(img, description);

  display.show(currentImg);

  selectedProduct.showAnimation();
}

function renderProducts(items, container) {
  items.forEach((item, i) => {
    const product = new Product(item, '.template-product', (img, description) => {
      handleProductClick(img, description);
    });

    const element = product.render();

    if (i === 0) {
      const currentImg = selectedProduct.create(item.images.origin, item.description);
      
      display.show(currentImg);
      
      product.getSelectProduct();
    }

    container.append(element);
  });
}

renderProducts(INITIAL_DATA, productList);
