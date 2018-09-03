import {Directive, OnInit, Input, ElementRef, Renderer2, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appTemperatureConversion]'
})
export class TemperatureConversionDirective implements OnInit {
  @HostBinding('class.temperature-section') public temperatureSection = true;
  
  @Input() public set appTemperatureConversion(temperature: string) {
    if (!temperature) { return; }
    
    const fahrenheit = parseInt(temperature) * 1.8 + 32;
    this._temperatureContext.textContent = fahrenheit.toString() + ' °F';
  }

  private _temperatureContext: HTMLSpanElement = this._renderer.createElement('span');

  // @HostListener('mouseover') 

constructor(private _renderer: Renderer2,
            private _elementRef: ElementRef) { }
  
  
  public ngOnInit() {
    this._temperatureContext.className = 'fahrenheit-tooltip';
    this._elementRef.nativeElement.appendChild(this._temperatureContext);
  }
  
}
