import { Component,NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Womenmurders1Component } from './womenmurders1/womenmurders1.component';
import { Share1Component } from './share1/share1.component';
import { UpdateComponent } from './update/update.component';
import { ReadComponent } from './read/read.component';

import { FormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path:'womenmurders1',
    component:Womenmurders1Component
  },
  {
    path:'share1',
    component:Share1Component
  },
  {
    path:'read',
    component:ReadComponent
  },
  {
    path:'update',
    component:UpdateComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const MyRountings=[
  Womenmurders1Component,
  Share1Component,
  ReadComponent,
  UpdateComponent
]
