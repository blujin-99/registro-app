import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    let result = []
    console.log("rta ",arg,value)
    //onsole.log(value)
    if (arg) {
      for (let argument of arg) {

        for (let post of value) {

          

          if (post.jur == argument.nombre) {
            result.push(post)
          }

          if(post.tasas){
             console.log(argument)
          }

          // 
          // if(post.excedentes){

          // }

          if (post.codigo_tramite == argument.tramite) {
            result.push(post)
          }

        }
      }
      return result

    } else {
      console.log('esta salida')
      return value

    }


  }


}
