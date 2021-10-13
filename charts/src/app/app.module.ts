import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxEchartsModule } from 'ngx-echarts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { EchartService } from './echart.service';
import { DatatableComponent } from './datatable/datatable.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    DatatableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEchartsModule.forRoot({echarts: () => import('echarts')}),
    HttpClientModule,
    DataTablesModule

  ],
  providers: [EchartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
