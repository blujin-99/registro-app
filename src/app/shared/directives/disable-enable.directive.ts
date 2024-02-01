import { Directive ,Input, ElementRef, Renderer2 , OnInit} from '@angular/core';

//---***---***---***---***README---***---***---***---***

// CUANDO UTILICEN LA DIRECTIVA EN EL TEMPLATE ,EL VALOR QUE DESEAN VERIFICAR PARA QUE DESHABILITE
// EL INPUT O SELECTOR, SEA UN SOLO VALOR O VARIOS SIEMPRE PORNER []
//EJEMPLO :  
//        [appDisabled]="[form.get('categoria')?.value]"
//SI QUIEREN PASARLE MÁS VALORES :
//[appDisabled]="[formPagoTasas.get('oficina')?.value,formPagoTasas.get('tipoSolicitud')?.value]"

//---***---***---***---***README---***---***---***---***

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
    const isArray = value.every(campo => campo !== '')
    const valid = value.every(campo => campo == '')
    if(isArray){
      console.log(isArray)
      this.renderer.setProperty(this.elref.nativeElement, 'disabled', false)
    }
    if(valid){
      this.renderer.setProperty(this.elref.nativeElement, 'disabled', true)
    }
  }
  

}
