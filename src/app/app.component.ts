import { Component } from '@angular/core';
import { Result } from './result';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'improved-search';
  resultsFetched = false;

  result: Result[];
  constructor(
    private apiService: ApiService
  ) { }

  fetchResults(e){
     this.resultsFetched = true;
     console.log("value pressed "+ e);
     this.apiService.getSearchResult().subscribe(res => {
      this.result = res;
      console.log(this.result[0].entity)
    });
  }
}
