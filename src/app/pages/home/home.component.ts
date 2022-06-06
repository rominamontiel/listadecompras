import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  itemToAdd: { name: string; img: string } | undefined;
  listProducts = [
    {
      name: 'Ades manzana',
      img: 'https://superlago.com.ar/wp-content/uploads/2020/12/7790895643835.jpg',
      category: 'bebidas',
    },
    {
      name: 'Papel higiénico',
      img: 'https://http2.mlstatic.com/D_NQ_NP_686442-MLA42832343953_072020-O.jpg',
      category: 'aseo',
    },
    {
      name: 'Papa',
      img: 'https://st.depositphotos.com/1343666/2314/i/450/depositphotos_23146772-stock-photo-yukon-gold-potatoes-isolated.jpg',
      category: 'verduras',
    },
    {
      name: 'Aceite',
      img: 'https://www.lacoopeencasa.coop/media/lcec/publico/articulos/b/3/d/b3d82b18191388fd6242ef8d76cd9f94',
      category: 'almacen',
    },
    {
      name: 'Agua',
      img: 'https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3040004_f.jpg',
      category: 'bebidas',
    },
    {
      name: 'Dentífrico Kolynos',
      img: 'https://http2.mlstatic.com/D_NQ_NP_693621-MLA43645399282_102020-O.jpg',
      category: 'aseo',
    },
    {
      name: 'Magdalenas Don Satur',
      img: 'https://www.rimoldimayorista.com.ar/datos/uploads/mod_catalogo/31308/don-satur-magdalenas-612e259299f33.jpg',
      category: 'almacen',
    },
    {
      name: 'Leche',
      img: 'https://www.pasosonline.com.ar/wp-content/uploads/2018/08/serenisima-leche-sachet.jpg',
      category: 'almacen',
    },
    {
      name: 'Yogur',
      img: 'https://ardiaprod.vteximg.com.br/arquivos/ids/189486-500-500/Yogur-Entero-Bebible-Yogs-Frutilla-900-Gr-_1.jpg?v=637443960627930000',
      category: 'almacen',
    },
    {
      name: 'Cerealitas',
      img: 'https://argensnack.com/wp-content/uploads/takemartapp-galletitas-cerealitas.jpg',
      category: 'almacen',
    },
    {
      name: 'Canasto inodoro',
      img: 'https://farmacityar.vteximg.com.br/arquivos/ids/204095-1000-1000/213886_canasta-solida-vim-citrus-x-55-gr_imagen-1.jpg?v=637383914633930000',
      category: 'limpieza',
    },
    {
      name: 'Shampoo',
      img: 'https://images.ctfassets.net/jdgtuh2uadx0/qn-qVxgJy4_9HqnWK0nURI/32576c3518f133c4f078c539c344111c/07500435019712_C1N1_LA2018Jan30121429.webp',
      category: 'aseo',
    },
    {
      name: 'Acondicionador',
      img: 'https://dqm4sv5xk0oaj.cloudfront.net/products/12419/large/7500435125116.jpg?1565195610',
      category: 'aseo',
    },
    {
      name: 'Cotonetes',
      img: 'https://riadigos.com.ar/wp-content/uploads/2020/03/cotonetes-de-algodon-seguros-johnson-johnson-x-150-und-D_NQ_NP_813143-MLA29005514822_122018-F.png',
      category: 'aseo',
    },
    {
      name: 'Jabón en polvo',
      img: 'https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/2841541_1_f.jpg',
      category: 'limpieza',
    },
    {
      name: 'Suavizante para ropa',
      img: 'https://jumboargentina.vtexassets.com/arquivos/ids/676106/Suavizante-Vivere-Clasico-900ml-2-879402.jpg?v=637725981899830000',
      category: 'limpieza',
    },
    {
      name: 'Aquarius',
      img: 'https://jumboargentina.vtexassets.com/arquivos/ids/580454/Aquarius-Pomelo-225-L-2-468820.jpg?v=637219992459330000',
      category: 'bebidas',
    },
    {
      name: 'Salchicas',
      img: 'https://hiperlibertad.vteximg.com.br/arquivos/ids/168342-1000-1000/SALCHICHAS-VIENISSIMA-X6UN-1-9862.jpg?v=637352840761830000',
      category: 'congelados',
    },
    {
      name: 'Pan de pancho',
      img: 'https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3420643_f.jpg',
      category: 'almacen',
    },
    {
      name: 'Cebolla',
      img: 'https://5aldia.cl/wp-content/uploads/2018/03/cebolla.jpg',
      category: 'verduras',
    },
    {
      name: 'Morrón',
      img: 'https://us.123rf.com/450wm/utima/utima1909/utima190900017/130490366-pimientos-pimenton-pimiento-aislado-en-blanco-.jpg?ver=6',
      category: 'verduras',
    },
    {
      name: 'Acelga',
      img: 'https://wongfood.vteximg.com.br/arquivos/ids/527070-750-750/4134-1.jpg?v=637819362758300000',
      category: 'verduras',
    },
    {
      name: 'Manzana',
      img: 'https://elegifruta.com.ar/onepage/wp-content/uploads/2017/07/manzana_roja.jpg',
      category: 'frutas',
    },
    {
      name: 'Banana',
      img: 'https://www.frutiban.com/wp-content/uploads/2017/12/banana.jpg',
      category: 'frutas',
    },
    {
      name: 'Comida michi',
      img: 'https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img/https://www.whiskas.com.ar/wp-content/uploads/2018/12/Carne-Adulto.jpg',
      category: 'almacen',
    },
    {
      name: 'Piedritas',
      img: 'https://carrefourar.vtexassets.com/arquivos/ids/214719/7795628000121_02.jpg?v=637680121877000000',
      category: 'almacen',
    },
    {
      name: 'Huevos',
      img: 'https://i.blogs.es/09c069/huevo/1366_2000.jpg',
      category: 'almacen',
    },
    {
      name: 'Tapa de tarta',
      img: 'http://d2r9epyceweg5n.cloudfront.net/stores/001/151/835/products/77902360012631-3cfa3782871810594f15874914150549-640-0.jpg',
      category: 'almacen',
    },
    {
      name: 'Harina',
      img: 'https://www.repartienda.com/wp-content/uploads/2020/04/IMG_6888.jpg',
      category: 'almacen',
    },
    {
      name: 'Servilletas',
      img: 'https://http2.mlstatic.com/D_NQ_NP_622971-MLA47291550701_082021-W.jpg',
      category: 'aseo',
    },
    {
      name: 'Tomate',
      img: 'https://static9.depositphotos.com/1628352/1107/i/600/depositphotos_11071361-stock-photo-tomato.jpg',
      category: 'verduras',
    },
    {
      name: 'Puré de Tomate',
      img: 'https://www.pasosonline.com.ar/wp-content/uploads/2019/05/7790580221904.jpg',
      category: 'almacen',
    },
    {
      name: 'Azucar',
      img: 'https://www.casa-segal.com/wp-content/uploads/2019/03/azucar-kilo-ledesma-reposteria-mendoza-casa-segal-1.jpg',
      category: 'almacen',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {}

  onSelectedItem(i: number) {
    const item = {
      name: this.listProducts[i].name,
      img: this.listProducts[i].img,
    };
    this.itemToAdd = item;
  }
}
