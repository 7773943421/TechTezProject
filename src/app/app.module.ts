import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HttpClientModule } from '@angular/common/http';
import { TodoComponent } from './CRUD/todo.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { ExampleComponent } from './form/example/example.component';


@NgModule({
  declarations: [
    AppComponent,
   
 
    TodoComponent,
          FormComponent,
          ExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
