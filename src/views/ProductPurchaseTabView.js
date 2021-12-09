import productPurchaseTemplate from '../templates/product-purchase-template.js';

export default class ProductPurchaseTabView {
  constructor() {
    this.contentContainer = document.querySelector('#content-container');
  }

  render() {
    this.contentContainer.innerHTML = productPurchaseTemplate.main;
  }
}