import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output() onEnter = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  search(e){
    
      this.onEnter.emit(e.target.value);
 
  }
}
