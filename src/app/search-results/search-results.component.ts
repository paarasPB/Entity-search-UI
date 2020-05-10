import { Component, OnInit, Input } from '@angular/core';
import { Result } from '../result';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  @Input () res: Result[]; 
  
  constructor() { }

  ngOnInit() {
    console.log("reached search display")
  }

}
