import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { Subscription } from 'rxjs';
import { BasicLineEchart } from '../echart.model';
import { EchartService } from '../echart.service';
import * as echarts from 'echarts';


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
    let product = <HTMLDivElement>document.getElementById('myChart');
    var chat = echarts.init(product,'dark')
    this.subscription = this.echartService.getBasicLineEchart().subscribe( data =>{
      this.initBasicLineChart(data);
    });
  }

  private initBasicLineChart(chartData: BasicLineEchart[]){
      this.chartOption = {
        tooltip: {
          trigger: 'axis'
        },
        backgroundColor: "rgba(0,0,0,0)",
        legend: {
          data: ['Predicted', 'Actual']
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
            value: m.name
          })),
          axisLabel:{
            show: true,
            color: 'rgba(255,255,255)'
          },

        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'Predicted',
            type: 'line',
            stack: 'Total',
            color: '#e01f54',
            data: chartData.map(m=>({
              value: m.value
            }))
          },
          {
            name: 'Actual',
            type: 'line',
            stack: 'Total',
            color: '#001852',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]


        };


  }
}
