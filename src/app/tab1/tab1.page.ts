import { Component } from '@angular/core';
import { ViacepService } from '../services/viacep.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  inputCep: string = ''; // Campo de busca
  textareaCep: string = ''; // Valor do textarea
  dataKeys: any;
  cep: string = ''; // Campo de saída do CEP
  logradouro: string = ''; // Campor de saída do Logradouro

  constructor(private viacepService: ViacepService) {}

  ngOnInit() {
    this.viacepService.getRemoteData('01001000').subscribe((data) => {
      console.log(data);
    });
  }

  consultarCep() {
    this.viacepService.getRemoteData(this.inputCep).subscribe((data) => {
      this.textareaCep = JSON.stringify(data);
      this.cep = JSON.parse(JSON.stringify(data)).cep;
      this.logradouro = JSON.parse(JSON.stringify(data)).logradouro;
      console.log(data);
      this.dataKeys = Object.keys(data);
      console.log(this.dataKeys);
    });
  }
}
