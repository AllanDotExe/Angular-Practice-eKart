import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: '[setBackground]'
})
export class SetBackground implements OnInit
{
  //private element: ElementRef
  //Defining private element in the constructor automatically defines the private element variable like above. (saves a line of code)
  constructor(private element: ElementRef) //Using Dependency Injection via the constructor
  {
    
  }

  //The code in thie function should be written into ngOnInit() because it gets called after all the component properties are fully initialised. 
  ngOnInit()
  {
    //Sets the css elemnt of the HTML element to the styles defined here.
    this.element.nativeElement.style.backgroundColor = '#36454F';
    this.element.nativeElement.style.color = 'white';
  }
}
