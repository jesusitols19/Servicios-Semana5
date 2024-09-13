import { Component,OnInit } from '@angular/core';
import { ServicePersonaService } from '../service-persona.service';

@Component({
  selector: 'app-form-persona',
  templateUrl: './form-persona.component.html',
  styleUrl: './form-persona.component.css'
})
export class FormPersonaComponent implements OnInit {

  constructor(private _servicePersona:ServicePersonaService){

  }
  ngOnInit(): void {

  }

  agregarPersona(nombre:string,edad:string,correo:string,telefono:string):void{
    this._servicePersona.agregarPersona(nombre,+edad,correo,telefono);
  }
}
