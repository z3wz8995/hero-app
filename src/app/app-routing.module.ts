import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    loadChildren:() => import("./modules/grilla/grilla.module").then(m=>m.GrillaModule)
  },
  {
    path:"detalle/:id",
    loadChildren:() => import("./modules/descripcion/detalle.module").then(m=>m.DetalleModule)
  },
  {
    path:"**",
    redirectTo:""
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
