import { Injectable } from '@angular/core';
import { Result } from './result';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public SearchResult: Result[] 
  searchUrl : string = "http://www.mocky.io/v2/5eb80c7f2d00003e2b357bc7";
      constructor(private http: HttpClient) { }
      getSearchResult(): Observable<Result[]>{
            return this.http.get<Result[]>(this.searchUrl);
      }
}
;

       