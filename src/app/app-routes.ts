import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
    AboutComponent,
    HomeComponent,
    PotafolioItemComponent,
    SearchComponent} from './pages';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'portafolio/:id', component: PotafolioItemComponent },
    { path: 'search/:termino', component: SearchComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes , {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
