import {
  ComponentFactoryResolver, Directive, Input, OnChanges, Renderer2, SimpleChanges, ViewContainerRef, AfterViewInit
} from '@angular/core';
import { ElementRef } from '@angular/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Directive({
  selector: 'button[appShowSpinner]'
})
export class SpinnerButtonDirective implements AfterViewInit, OnChanges {
  // tslint:disable-next-line:no-input-rename
  @Input('appShowSpinner') showSpinner?: boolean;
  originalInnerText?: string;
  spinner?: MatProgressSpinner;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngAfterViewInit() {
    // Record the button's original text
    this.originalInnerText = this.el.nativeElement.innerText;

    // Set the button to maintain the same dimensions, even once we put the spinner inside.
    this.el.nativeElement.style.width = `${(this.el.nativeElement as HTMLElement).offsetWidth}px`;
    this.el.nativeElement.style.height = `${(this.el.nativeElement as HTMLElement).offsetHeight > 0 ? (this.el.nativeElement as HTMLElement).offsetHeight : 36}px`;

    // Create the spinner
    const factory = this.componentFactoryResolver.resolveComponentFactory(MatProgressSpinner);
    const componentRef = this.viewContainerRef.createComponent(factory);
    this.spinner = componentRef.instance;

    // Configure the spinner
    this.spinner.strokeWidth = 3;
    this.spinner.diameter = 24;
    this.spinner.color = 'accent';

    // Hide the spinner
    this.renderer.setStyle(this.spinner._elementRef.nativeElement, 'display', 'none');

    // Apply new styles to the button content's container
    const span = this.el.nativeElement.querySelector('.mat-button-wrapper') as HTMLSpanElement;
    this.renderer.setStyle(span, 'display', 'flex');
    this.renderer.setStyle(span, 'align-items', 'center');
    this.renderer.setStyle(span, 'justify-content', 'center');
  }

  ngOnChanges(changes: SimpleChanges) {
    if (typeof(changes.showSpinner) === 'object' && !changes.showSpinner.isFirstChange()) {
      if (changes.showSpinner.currentValue === true) {
        // Clear the button's text
        const span = this.el.nativeElement.querySelector('.mat-button-wrapper') as HTMLSpanElement;
        span.innerText = '';

        // Append the spinner
        this.renderer.appendChild(this.el.nativeElement.firstChild, this.spinner?._elementRef.nativeElement);

        // Show the spinner
        this.renderer.setStyle(this.spinner?._elementRef.nativeElement, 'display', 'inherit');
      }

      if (changes.showSpinner.currentValue === false) {
        // Hide the spinner
        this.renderer.setStyle(this.spinner?._elementRef.nativeElement, 'display', 'none');

        // Remove the spinner
        this.renderer.removeChild(this.el.nativeElement.firstChild, this.spinner?._elementRef.nativeElement);

        const span = this.el.nativeElement.querySelector('.mat-button-wrapper') as HTMLSpanElement;
        span.innerText = this.originalInnerText as string;
      }

      this.el.nativeElement.disabled = changes.showSpinner.currentValue;
    }
  }
}
