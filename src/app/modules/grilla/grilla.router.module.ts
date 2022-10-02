import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GrillaLayout } from './grilla.layout';
import { GrillaComponent } from "./pages/grilla.component";

const routes: Routes = [
    {
      path: '',
      component: GrillaLayout,
      children: [
        {
          path: '',
          pathMatch: 'full',
          component: GrillaComponent
        }
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class GrillaRouterModule { }