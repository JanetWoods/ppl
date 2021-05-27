import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { WelcomeComponent } from './app/home/welcome';
import { ProductDetailsComponent } from './app/product-details/product-details.component';
import {ProductListComponent} from './app/product-list/product-list.component'


const routes: Routes = [
    {path: 'product/:id', component: ProductDetailsComponent},
    {path: 'products', component: ProductListComponent},
    {path: 'welcome', component: WelcomeComponent},
    {path: '', redirectTo: 'welcome', pathMatch: 'full'},
    {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{}