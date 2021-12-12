import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridFourColumnComponent } from './components/storefront/grid-four-column/grid-four-column.component';

const routes: Routes = [
  {
    path:"grid-four-col",
    component: GridFourColumnComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
