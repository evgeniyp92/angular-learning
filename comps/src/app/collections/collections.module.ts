import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';

@NgModule({
  declarations: [], // components, pipes, directives made in the module
  imports: [CommonModule, CollectionsRoutingModule, CollectionsHomeComponent], // dependencies of the module
  exports: [CollectionsHomeComponent], // components, pipes, directives made available to other modules
  // providers: [], // services made available to the module [OLD]
  // bootstrap: [], // root component of the module [OLD]
})
export class CollectionsModule {}
