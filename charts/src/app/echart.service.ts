import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasicLineEchart } from './echart.model';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EchartService {

  constructor(private http: HttpClient) { }

  getBasicLineEchart(): Observable<BasicLineEchart[]> {

    return this.http.get<BasicLineEchart[]>('assets\echarts\basic-line-chart.json');

  }
}
