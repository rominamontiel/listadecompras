import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-grid-products',
  templateUrl: './grid-products.component.html',
  styleUrls: ['./grid-products.component.scss'],
})
export class GridProductsComponent implements OnInit {
  @Input() listProducts: any | undefined;
  @Output() selectedItem: EventEmitter<number> = new EventEmitter<number>();
  listProductsCopy: any = [];
  categorySelected = '';
  categoriesList = [
    'frutas',
    'almacen',
    'verduras',
    'congelados',
    'bebidas',
    'aseo',
    'limpieza',
  ];

  constructor() {}

  ngOnInit(): void {
    this.listProductsCopy = this.listProducts;
  }

  onSelectedCategory(name: string) {
    if (this.categorySelected == name) {
      this.listProductsCopy = this.listProducts;
    } else {
      this.listProductsCopy = [];
      this.categorySelected = name;

      if (this.listProducts) {
        this.listProducts.forEach((e: any) => {
          if (e.category == name) {
            this.listProductsCopy.push(e);
          }
        });
      }
    }
  }

  emitItem(name: string) {
    this.listProducts.forEach((e:any) => {
      if (e.name == name) {
        this.selectedItem.emit(this.listProducts.indexOf(e));
      }
    });
  }
}
