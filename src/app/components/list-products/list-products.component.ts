import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
})
export class ListProductsComponent implements OnInit {
  @Input() itemReceived: { name: string; img: string } | undefined;
  array = [
    { cant: 1, check: false },
    { cant: 1, check: false },
    { cant: 1, check: false },
    { cant: 1, check: false },
    { cant: 1, check: false },
    { cant: 1, check: false },
    { cant: 1, check: false },
  ];
  listItems: { name: string; img: string; cant: number; check: boolean }[] = [];
  isEmpty = false;

  constructor() {}

  ngOnInit(): void {
    if (this.listItems.length == 0) {
      this.isEmpty = true;
    }
  }

  ngOnChanges() {
    if (this.itemReceived) {
      const item = {
        name: this.itemReceived.name,
        img: this.itemReceived.img,
        cant: 1,
        check: false,
      };

      var exists = false; //existe 1 elemento similar ya?
      var existsIndex = 99;

      this.listItems.forEach((e) => {
        if (this.itemReceived) {
          if (e.name == this.itemReceived.name) {
            exists = true;
            existsIndex = this.listItems.indexOf(e);
          }
        }
      });

      if (!exists) {
        this.listItems.push(item);
      } else {
        this.listItems[existsIndex].cant++;
      }

      this.isEmpty = false;
    }
  }

  onCountItem(type: string, i: number): void {
    this.isEmpty = false;

    if (type == '+') {
      this.listItems[i].cant = this.listItems[i].cant + 1;
    } else {
      this.listItems[i].cant = this.listItems[i].cant - 1;
    }

    if (this.listItems[i].cant <= 0) {
      this.listItems.splice(i, 1);
    }

    if (this.listItems.length == 0) {
      this.isEmpty = true;
    }
  }

  onDeleteList(){
    this.listItems = [];
    this.isEmpty = true;    
  };

  onBought(){
    // mandar la lista a la bd antes de limpiar
    this.listItems = [];
    this.isEmpty = true;    
  };
}
