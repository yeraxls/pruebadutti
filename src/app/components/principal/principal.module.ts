import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PrincipalComponentsRoutingModule } from './principal-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
// Components
import { ShipsComponent } from '../ships/ships.component';
import { PlanetsComponent } from '../planets/planets.component';
import { PageTwoComponent } from '../page-two/page-two.component';
import { ShipsDetailsComponent } from '../ships/ships-details/ships-details.component';
import { ShipsDetailsDialogComponent } from '../ships/ships-details/ships-details-dialog/ships-details-dialog.component';
import { PlanetsDetailsComponent } from '../planets/planets-details/planets-details.component';

@NgModule({
  declarations: [
    ShipsComponent,
    ShipsDetailsComponent,
    ShipsDetailsDialogComponent,
    PlanetsComponent,
    PageTwoComponent,
    PlanetsDetailsComponent
  ],
  imports: [
    CommonModule,
    PrincipalComponentsRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ]
})
export class PrincipalModule { }