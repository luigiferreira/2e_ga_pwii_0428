import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesLivroComponent } from './detalhes-livro.component';

const routes: Routes = [
  {
    path: "",
    component: DetalhesLivroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetalhesLivroRoutingModule { }