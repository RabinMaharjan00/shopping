import { Component, OnInit } from '@angular/core';
import {products} from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = products;
  share() {
    window.alert('The products has been shared');
  }
  onNotify() {
    window.alert('You will be notify when product will be in sale');
  }

  constructor() { }

  ngOnInit() {
  }

}
