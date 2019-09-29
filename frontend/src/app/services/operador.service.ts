import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../models/persona';
import { Linea } from '../models/linea';
@Injectable({
  providedIn: 'root'
})
export class OperadorService {
  persona:Persona;
  personas:Persona[];
  linea:Linea;
  lineas:Linea[];
  readonly url="http://localhost:3000/api/operador/persona";
  constructor(private http:HttpClient) { 
    this.linea=new Linea();  
  }
  getPersonas(){
    return this.http.get(this.url);
  }
  setPersona(){ 
    return this.http.post(this.url,this.persona);
  }
  putPersona(){
    return this.http.put(this.url+"/"+this.persona._id,this.persona);
  }
  deletePersona(){
    return this.http.delete(this.url+'/'+this.persona._id+'/'+this.persona.cedula);
  }
  getLinea(){
    return this.http.get(this.url+"/linea");
  }
  getLineasDisponibles(){
    return this.http.get(this.url+"/lineasDisponibles");
  }
  setLinea(){

    return this.http.post(this.url+"/linea",this.linea);
  }

}
