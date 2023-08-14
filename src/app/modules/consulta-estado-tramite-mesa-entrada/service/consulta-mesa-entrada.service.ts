import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable, catchError } from 'rxjs';
import { Consulta } from 'src/app/core/models/mesa-entrada.interface';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaMesaEntradaService {
  
  constructor(private http : HttpClient){}

  apiUrl = 'https://www.santafe.gob.ar/estadotramiterg/consulta';

  private UrlObservable$ = new BehaviorSubject<string>('')

  private resultado$ = new BehaviorSubject<any>(null)

  setConsulta(fecha: any, aforo: any, mesa: any) : void {
    const consultaUrl = `${this.apiUrl}?fecha=${fecha}&aforo=${aforo}&mesa=${mesa}`;
    this.UrlObservable$.next(consultaUrl)
  }

  // postConsulta(consulta: Consulta): Observable<Consulta>{
  //   return this.http.post<Consulta>(this.apiUrl, consulta)
  // }

  getConsulta(){
    return this.UrlObservable$.asObservable()
  }

  getConsultaHttp(): void {
    this.getConsulta().subscribe(
      url => { 
        this.http.get(url).pipe(
          tap(datos => {
            this.resultado$.next(datos); // Emitir el resultado al Observable
          }),
          catchError(error => {
            // mostrar error
            console.error('Error en la solicitud HTTP:', error);
            return [];
          })
        ).subscribe();
      }
    );
  }

  getResultado(): Observable<any>{
     return this.resultado$.asObservable()
  }
}
  

