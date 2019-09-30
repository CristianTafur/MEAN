import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../models/persona';
import { Linea } from '../models/linea';
import { Factura } from '../models/factura';
@Injectable({
  providedIn: 'root'
})
export class OperadorService {
  persona:Persona;
  personas:Persona[];
  linea:Linea;
  lineas:Linea[];
  factura:Factura;
  facturas:Factura[];
  readonly url="http://localhost:3000/api/operador";
  constructor(private http:HttpClient) { 
    this.linea=new Linea();  
    this.factura=new Factura();
  }
  getPersonas(){
    return this.http.get(this.url+'/getpersonas');
  }
  setPersona(){ 
    return this.http.post(this.url+'/createPersona',this.persona);
  }
  putPersona(){
    return this.http.put(this.url+"/updatePersona/"+this.persona._id,this.persona);
  }
  deletePersona(){
    return this.http.delete(this.url+'/deletePersona/'+this.persona._id+'/'+this.persona.cedula);
  }
  getLinea(){
    return this.http.get(this.url+"/getLineas");
  }
  getLineasDisponibles(){
    return this.http.get(this.url+"/getLineasDisponibles");
  }
  getLineasPersona(cedula){
    return this.http.get(this.url+"/getLineasPersona/"+cedula);
  }
  setLinea(){

    return this.http.post(this.url+"/createLineaPersona",this.linea);
  }
  setFactura(){
    return this.http.post(this.url+"/createFacturaPersona",this.factura);
  }
  getPersona(){
    return this.http.get(this.url+'/getpersona/'+this.persona.cedula);
  }
  getFacturasPersona(){
    return this.http.get(this.url+'/getFacturasPersona/'+this.factura.persona+'/'+this.factura.emision)
  }
  deleteFacturaPersona(id:string){
    return this.http.delete(this.url+'/deleteFacturaPersona/'+id); 
  }
}
