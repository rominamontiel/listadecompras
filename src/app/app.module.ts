import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { GridProductsComponent } from './components/grid-products/grid-products.component';
import { ListProductsComponent } from './components/list-products/list-products.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeaturedProductsComponent,
    GridProductsComponent,
    ListProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
