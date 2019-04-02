import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { AppProduct } from './AppProduct.component';
import { AppInventory} from './AppInventory.component';
import { PageNotFoundComponent } from './PageNotFound.component';
import { ProductFormComponent } from './product-form.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'products', component: AppProduct },
  { path: 'inventory', component: AppInventory},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports:      [ BrowserModule, HttpModule,
                  RouterModule.forRoot(appRoutes), FormsModule ],
  declarations: [ AppComponent, AppProduct, AppInventory, PageNotFoundComponent, ProductFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
