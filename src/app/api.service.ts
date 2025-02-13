import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = "https://api.nbp.pl/api/cenyzlota/last/";
  private format = "?format=json";
  constructor(private http: HttpClient) {}

  getPosts(number: number): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + number + this.format);
  }

  getPostsDefault(): Observable<any[]> {
    return this.http.get<any[]>("https://api.nbp.pl/api/cenyzlota/last/30/?format=json");
  }
}
