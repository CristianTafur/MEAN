import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../models/persona';
@Injectable({
  providedIn: 'root'
})
export class OperadorService {
  persona:Persona;
  personas:Persona[];
  readonly url="http://localhost:3000/api/operador/persona";
  constructor(private http:HttpClient) { }
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

}
