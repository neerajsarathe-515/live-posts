import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { Subscription } from 'rxjs';
import { BasicLineEchart } from '../echart.model';
import { EchartService } from '../echart.service';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  subscription !: Subscription;
  chartOption !: EChartsOption;

  constructor(private echartService: EchartService) { }

  ngOnInit(): void {
    this.subscription = this.echartService.getBasicLineEchart().subscribe( data =>{
      this.initBasicLineChart(data);
    });
  }

  private initBasicLineChart(chartData: BasicLineEchart[]){
      this.chartOption = {

          title: {
            text: 'Stacked Line'
          },
          tooltip: {
            trigger: 'axis',
            show: true
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: chartData.map(m=>({
              name: m.name
            }))
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: chartData.map(m=>({
                value: m.value
              })),
              type: 'line'
            }
          ]
        };


  }
}
