import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Country } from '../entities/pais.entity';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  constructor(private http: HttpClient) {}

  buscarPorPais(dato: string): Observable<Country[]> {
    return this.http.get<Country[]>(
      `${environment.API_RESTCOUNTRY}/name/${dato}`
    );
  }
  buscarPorCapital(dato: string): Observable<Country[]> {
    return this.http.get<Country[]>(
      `${environment.API_RESTCOUNTRY}/capital/${dato}`
    );
  }
  buscarPorRegion(dato: string): Observable<Country[]> {
    return this.http.get<Country[]>(
      `${environment.API_RESTCOUNTRY}/region/${dato}`
    );
  }
  buscarPorCodigo(dato: string): Observable<Country> {
    return this.http.get<Country>(
      `${environment.API_RESTCOUNTRY}/alpha/${dato}`
    );
  }
}
