import { Injectable } from '@angular/core';
import { Persona } from './Persona';
@Injectable({
  providedIn: 'root'
})
export class ServicePersonaService {

  listaPersonas:Persona[] = [{
    nombre:"Victor",
    edad:20,
    correo:"jesus@gmail.com",
    telefono:"993424568"
  }];


  getLista():Persona[]{
    return this.listaPersonas;
  }

  agregarPersona(nombre:string,edad:number, correo:string,telefono:string):void{
    this.listaPersonas.push({ nombre: nombre, edad: edad,correo:correo,telefono:telefono});
  }

  constructor() { }
}

