import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../models/product.model';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss'],
})
export class ProductoComponent {

  @Input() products: Product = {
    id: '',
    title: '',
    price: 0,
    image: '',
    description: '',
    category: ''
  }

  @Output() addedProduct = new EventEmitter<Product>();

  constructor() {}

  onAddToCart() {
    this.addedProduct.emit(this.products);
  }

}
