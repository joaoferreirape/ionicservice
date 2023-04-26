import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViacepService {

  constructor(private http: HttpClient) { }

  getRemoteData(cep: string) {
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`);
  }
}
