import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent
{
  @Input()
  all: number = 0;

  @Input()
  inStock: number = 0;

  @Input()
  outOfStock: number = 0;

  //Event
  @Output() //Allows for certain functions calls in the parent components.
  selectedFilterRadioButtonChanged: EventEmitter<string> = new EventEmitter<string>();

  selectedFilterRadioButton: string = 'all';

  OnSelectedFilterRadioButtonChanged()
  {
    //console.log(this.selectedFilterRadioButton);
    this.selectedFilterRadioButtonChanged.emit(this.selectedFilterRadioButton);
  }
}
