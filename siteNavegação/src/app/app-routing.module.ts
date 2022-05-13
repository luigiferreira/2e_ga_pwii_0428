import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: "home",
    loadChildren: () => import("./components/home/home.module").then(m => m.HomeModule)
  },
  {
    path: "login",
    loadChildren: () => import("./components/login/login.module").then(m => m.LoginModule)
  },
  {
    path: "detalheslivro",
    loadChildren: () => import("./components/detalhes-livro/detalhes-livro.module").then(m => m.DetalhesLivroModule)
  },
  {
    path: "**",
    loadChildren: () => import("./components/page-not-found/page-not-found.module").then(m => m.PageNotFoundModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
