// these routers have their routes read by the core app module
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { BiographyComponent } from './biography/biography.component';
import { CompaniesComponent } from './companies/companies.component';
import { PartnersComponent } from './partners/partners.component';

const routes: Routes = [
  {
    path: '',
    component: CollectionsHomeComponent,
    // children routes
    children: [
      {
        path: '',
        component: BiographyComponent,
      },
      {
        path: 'companies',
        component: CompaniesComponent,
      },
      {
        path: 'partners',
        component: PartnersComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectionsRoutingModule {}
