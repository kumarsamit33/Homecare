import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PcaComponent } from './pca.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PcaComponent
  }
];

@NgModule({
  declarations: [
    PcaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PcaModule { }
