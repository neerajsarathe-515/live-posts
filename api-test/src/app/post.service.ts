import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PostService {
  constructor(private http: HttpClient) {}
  getPosts() {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('access'),
    });

    const body = {
      orgName: 'hospitals',
      userName: 'appollo',
    };

    return this.http
      .post<any>(`${environment.apiUrl}/api/getAllStockDetails`, body, {
        headers,
      })
      .pipe(
        map((allStocks) => {
          return allStocks?.data?.Details?.data;
        })
      );
  }

  getAccess() {
    const body = {
      username: localStorage.getItem('UName'),
      password: 'deeploop',
    };
    return this.http.post<any>(
      `${environment.apiUrl}/api/generateAccessToken`,
      body
    );
  }

  // return this.http.post('http://13.235.242.76:8000/api/getAllStockDetails', body,{headers});
  // return this.http.post(`${environment.apiUrl}/api/getAllStockDetails`, body,{headers})

  // return this.itemList;
}
