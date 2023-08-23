import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    let result = []
    console.log("rta ",arg,value)
    console.log(arg.jurisdiccion.nombre)
    if (arg) {
      for (let argument of arg) {

        for (let listaTabla of value) {

          

          if (listaTabla.jur == argument.nombre) {
            
          }

          if(listaTabla.tasas){
             console.log(argument)
          }

          // 
          // if(post.excedentes){

          // }

          if (listaTabla.codigo_tramite == argument.tramite) {
            
          }

        }
      }
      

    } else {
      console.log('esta salida')
      return value

    }


  }


}
