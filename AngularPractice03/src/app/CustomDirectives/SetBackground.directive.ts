import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector: '[setBackground]' //Is a attribute directive due to square brackets []. To be put in HTML element
})
export class SetBackground implements OnInit
{
  //private element: ElementRef
  //Defining private element in the constructor automatically defines the private element variable like above. (saves a line of code)
  constructor(private element: ElementRef, private renderer: Renderer2) //Using Dependency Injection via the constructor
  {

  }

  //The code in thie function should be written into ngOnInit() because it gets called after all the component properties are fully initialised. 
  ngOnInit()
  {
    //Sets the css elemnt of the HTML element to the styles defined here.
    //nativeElemnt gives us access to the DOM Element.
    //this.element.nativeElement.style.backgroundColor = '#36454F';
    //this.element.nativeElement.style.color = 'white';
    //DIRECTLY MANIPULATING THE DOM LIKE ABOVE IS NOT GOOD PRACTICE, USE RENDERER2 CLASS INSTEAD!
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', '#36454F');
    this.renderer.setStyle(this.element.nativeElement, 'color', 'white');
    //this.renderer.setAttribute(this.element.nativeElement, 'title', 'This is example title');
  }
}
