import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './pages/home/home.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { PlanosComponent } from './pages/planos/planos.component';




const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'carrito', component: CarritoComponent},
    { path: 'checkout', component: CheckoutComponent},
    { path: 'planos', component: PlanosComponent},
    { path: '**', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class FeatureRoutingModule {}