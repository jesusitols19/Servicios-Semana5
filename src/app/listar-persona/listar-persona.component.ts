import { Component,OnInit } from '@angular/core';
import { ServicePersonaService } from '../service-persona.service';
import { Persona } from '../Persona';
@Component({
  selector: 'app-listar-persona',
  templateUrl: './listar-persona.component.html',
  styleUrl: './listar-persona.component.css'
})
export class ListarPersonaComponent implements OnInit {

  listaPersonas:Persona[] = [];

  constructor(private _servicePersona:ServicePersonaService){

  }

  ngOnInit(): void {
    this.listaPersonas = this._servicePersona.getLista();
  }
}
