import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { DettaglioComponent } from './dettaglio/dettaglio.component';
import { HomeComponent } from './home/home.component';
import { ApiService } from './_services/api.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { 
    path: 'dettaglio/:id', 
    component: DettaglioComponent,
    resolve: {
      dettaglioDrink: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        return inject(ApiService).getDettaglioDrink(route.paramMap.get('id')!);
      },

    }
  },
  { path: '', pathMatch: 'full', redirectTo: '/home'},
  // { path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
