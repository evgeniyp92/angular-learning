import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElementsModule } from './elements/elements.module';
import { CollectionsModule } from './collections/collections.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent], // list components pipes, directives created in a module
  imports: [BrowserModule, AppRoutingModule, ElementsModule, CollectionsModule], // list dependencies of the module
  exports: [], // list what is made available to other modules
  providers: [], // old way of connecting modules and services
  bootstrap: [AppComponent], // used by AppModule only to declare what component to start with
})
export class AppModule {}
