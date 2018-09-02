import { Directive, OnInit, Input, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appTemperatureConversion]'
})
export class TemperatureConversionDirective implements OnInit {
  private _renderer: Renderer2;
  private _elementRef: ElementRef;
  
  private _temperatureContext: HTMLSpanElement;
  
  @Input() public set appTemperatureConversion(temperature: string) {
    if (!temperature) { return; }
    
    const fahrenheit = parseInt(temperature) * 1.8 + 32;
    
    this._temperatureContext.textContent = fahrenheit.toString();
  }

  // @HostListener('mouseover') 

  constructor() { }
  
  
  ngOnInit() {
    this._temperatureContext = this._renderer.createElement('span');
    this._temperatureContext.className = 'fahrenheit-tooltip';
    this._elementRef.nativeElement.appendChild(this._temperatureContext);
  }
  
}
