import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  products = [
    {
      id: 1,
      name: 'Minimalist Analog Watch',
      price: '109',
      color: 'Black',
      available: 'Available',
      image: '../../assets/image/Minimalist Analog Watch.jpg',
    },
    {
      id: 2,
      name: 'Hisense Ultra HD Smart TV',
      price: '3339',
      color: 'Black',
      available: 'Available',
      image: '../../assets/image/Hisense Ultra HD Smart TV.jpg',
    },
    {
      id: 3,
      name: 'APPLE iPhone 12',
      price: '1855',
      color: 'Black',
      available: 'Not Available',
      image: '../../assets/image/APPLE iPhone 12.png',
    },
    {
      id: 4,
      name: 'LG Fully Automatic Washing Machine',
      price: '1765',
      color: 'White',
      available: 'Available',
      image: '../../assets/image/LG Fully Automatic Washing Machine.webp',
    },
    {
      id: 5,
      name: 'LG Refrigenator',
      price: '2815',
      color: 'White',
      available: 'Not Available',
      image: '../../assets/image/LG Refrigenator.webp',
    },
    {
      id: 6,
      name: 'DELL Inspiron One 27 Ryzen 7',
      price: '2145',
      color: 'White',
      available: 'Available',
      image: '../../assets/image/DELL Inspiron One 27 Ryzen 7.jpg',
    },
  ];
}
