import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ContactsComponent } from './pages/contacts/contacts.component';



@NgModule({
  declarations: [
    InicioComponent,
    ContactsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InicioComponent,
    ContactsComponent
  ]
})
export class RestaurantModule { }
