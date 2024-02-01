import { Directive ,Input, ElementRef, Renderer2 , OnInit} from '@angular/core';

@Directive({
  selector: '[appDisabled]',
  standalone:true
})
export class DisableEnableDirective implements OnInit {

  constructor(private readonly elref: ElementRef, private readonly renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setProperty(this.elref.nativeElement, 'disabled', true)
  }

  @Input() set appDisabled(value: any[]){
    const isEmptyArray = Array.isArray(value) && value[0] === '';
    if (!isEmptyArray){
      this.renderer.setProperty(this.elref.nativeElement, 'disabled', false)
    }else{
      this.renderer.setProperty(this.elref.nativeElement, 'disabled', true)
    }
 
  }
  

}
