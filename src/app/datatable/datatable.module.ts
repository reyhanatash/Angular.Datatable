import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatatableRoutingModule } from './datatable-routing.module';
import { DatatableComponent } from './datatable.component';
import { FormsModule } from '@angular/forms';
import { BaseService } from '../services/base.service';
import { HttpClientModule } from '@angular/common/http';
import { SortDirective } from '../directive/sort.directive';


@NgModule({
  declarations: [
    DatatableComponent,
    SortDirective
  ],
  imports: [
    CommonModule,
    DatatableRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    BaseService
  ]
})
export class DatatableModule { }
