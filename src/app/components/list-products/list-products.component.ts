import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
})
export class ListProductsComponent implements OnInit {
  @Input() itemReceived: { name: string; img: string } | undefined;
  listItems: { name: string; img: string; cant: number; check: boolean }[] = [];
  isEmpty = false;

  constructor() {}

  ngOnInit(): void {
    // al iniciar pregunto si en local hay algo, si no lo hay va imagen de vacio - si lo hay guardo la lista en this.listItems
    if (localStorage.getItem('local') != '[]' && localStorage.getItem('local') != null) {
      const listLocal = localStorage.getItem('local');

      if (listLocal != null) { //JSON.parse tira error si lo que le mandas puede ser null
        this.listItems = JSON.parse(listLocal);
      }
      
    } else {
      this.isEmpty = true;
    }    
  }

  // Se ejecuta cada vez que se agrega un producto desde afuera
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

      this.storeLocally();
    }
  }

  // Sumar o restar 1 producto
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

    this.storeLocally();
  }

  // marcar un producto como comprado
  onCheck(i:number){
    this.listItems[i].check = !this.listItems[i].check;
    this.storeLocally();
  }

  onDeleteList() {
    this.listItems = [];
    this.isEmpty = true;

    this.storeLocally();
  }

  onBought() {
    // mandar la lista a la bd antes de limpiar
    this.listItems = [];
    this.isEmpty = true;

    this.storeLocally();
  }

  // Almaceno en local storage la lista
  storeLocally() {
    const item = this.listItems;
    localStorage.setItem('local', JSON.stringify(item));
  }
}
