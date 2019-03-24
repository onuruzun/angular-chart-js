import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsComponent } from './charts/charts.component';
import { ChartsModule } from 'ng2-charts';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { DougnutChartComponent } from './dougnut-chart/dougnut-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';

const routes: Routes = [
  { path: 'bar-chart', component: ChartsComponent },
  { path: 'pie-chart', component: PieChartComponent },
  { path: 'radar-chart', component: RadarChartComponent },
  { path: 'doughnut-chart', component: DougnutChartComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    PieChartComponent,
    DougnutChartComponent,
    RadarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    RouterModule.forRoot(routes),

  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
