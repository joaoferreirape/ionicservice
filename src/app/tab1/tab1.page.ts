import { Component } from '@angular/core';
import { ViacepService } from '../services/viacep.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  inputCep: string = '';
  textareaCep: string = '';

  constructor(private viacepService: ViacepService) { }

  ngOnInit() {
    this.viacepService.getRemoteData('01001000').subscribe(data => {
      console.log(data);
    })
  }

  consultarCep() {
    this.viacepService.getRemoteData(this.inputCep).subscribe(data => {
      this.textareaCep = JSON.stringify(data);
      console.log(data);
    })
  }

}
