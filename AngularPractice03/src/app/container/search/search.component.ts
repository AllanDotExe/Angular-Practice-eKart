import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent
{
  searchText: string = "";

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  //Optional 2nd Argument of @ViewChild()
  //1. Read: use it to read the different token from the queried elements.
  //2. Static: Determines when the query is resolved.
  //    True is when the view is initialised (before the first change detection) for the first time.
  //    False if you want it to be resolved after every change detection.
  @ViewChild('searchInput')
  searchInputEl: ElementRef;

  updateSeatchText()
  {
    this.searchText = this.searchInputEl.nativeElement.value;
    this.searchTextChanged.emit(this.searchText);
  }
}
