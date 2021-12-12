import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridFourColumnComponent } from './components/storefront/grid-four-column/grid-four-column.component';
import { CategoriesUiFiveColComponent } from './components/storefront/categories-ui-five-col/categories-ui-five-col.component';

@NgModule({
  declarations: [
    AppComponent,
    GridFourColumnComponent,
    CategoriesUiFiveColComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
