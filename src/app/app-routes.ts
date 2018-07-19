import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
    AboutComponent,
    HomeComponent,
    PotafolioItemComponent } from './pages/index';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'portafolio/:id', component: PotafolioItemComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes , {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
