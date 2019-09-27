import { Component, OnInit } from '@angular/core';
import { OperadorService } from 'src/app/services/operador.service';
import { Persona } from 'src/app/models/persona'; 
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  num:number;
  cedula:string;
  nombre:string;
  apellido:string;
  date:string;

  constructor(private persona:OperadorService) {
    this.cedula="cedula";
    this.nombre="nombre";
    this.apellido="apellido";
    this.date="date"
  }

  ngOnInit() {
    this.getPersonas();
  }
  getPersonas(){
    this.persona.getPersonas().subscribe(res=>{
      this.persona.personas=res as Persona[];
      
      this.persona.personas.forEach(persona => {
        persona.estado=false; 
        persona.date=persona.date.split('T')[0];
       });
       this.num=this.persona.personas.length;   
    });
  }
  setPersona(id:any){
    let cedula=this.obtnerDOM(this.cedula+id).value;
    let nombre=this.obtnerDOM(this.nombre+id).value;
    let apellido=this.obtnerDOM(this.apellido+id).value;
    let date=this.obtnerDOM(this.date+id).value;
    if (cedula.length>2&&nombre.length>2&&apellido.length>2&&date.length>9) { 
      let estado=this.persona.personas.find(persona=>persona.cedula == cedula)==null;
      console.log();
      if (estado) {
        this.persona.persona=new Persona();
        this.persona.persona.cedula=cedula;
        this.persona.persona.apellido=apellido;
        this.persona.persona.nombre=nombre;
        this.persona.persona.date=date;
        this.persona.setPersona().subscribe(res =>{
        let persona=<Persona>res;
        persona.estado=false;  
        persona.date=date.split('T')[0];
        this.persona.personas.push(persona); 
        this.obtnerDOM(this.cedula+id).value="";
        this.obtnerDOM(this.nombre+id).value="";
        this.obtnerDOM(this.apellido+id).value="";
        this.obtnerDOM(this.date+id).value=""; 
        
        this.num=this.persona.personas.length;
        Swal.fire(
          'agregado!',
          'has agregado un usuario!',
          'success'
        )
      });
      } else {
        this.obtnerDOM(this.cedula+id).value="";
        Swal.fire(
          'error!',
          'este usuario ya existe.',
          'error'
        )
      }  
    }else{
      Swal.fire(
        'alerta!',
        'los campos deben tener una longitud minima de 3 caracteres, no olvide llenar el campo fecha.',
        'warning'
      )
    }     
  }
  putUser(id: number){  
    let cedula=this.obtnerDOM(this.cedula+id).value;
    let nombre=this.obtnerDOM(this.nombre+id).value;
    let apellido=this.obtnerDOM(this.apellido+id).value;
    let date=this.obtnerDOM(this.date+id).value;
    if (nombre.length>2) {
       Swal.fire({
        title: 'estas seguro?',
        text: "se editara el usuario existente",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, edita esto!',
        cancelButtonText:'cancelar'
      }).then((result) => {
        if (result.value) {   
       
          this.persona.persona=new Persona();
          this.persona.persona._id=this.persona.personas[id]._id;
          this.persona.persona.cedula=cedula;
          this.persona.persona.apellido=apellido;
          this.persona.persona.nombre=nombre;
          this.persona.persona.date=date;
          this.persona.putPersona().subscribe(res=>{ 
            this.persona.personas[id]=this.persona.persona;
            this.persona.personas[id].estado=false;
          // this.getUser(); 
            Swal.fire(
              'editado!',
              'has editado al usuario.',
              'success'
            )
          }); 
        }
      })
    } else {
      Swal.fire(
        'alerta!',
        'los campos deben tener una longitud minima de 3 caracteres.',
        'warning'
      )
    }
     
  }
  deleteUser(id:number){
    Swal.fire({
      title: 'estas seguro?',
      text: "se eliminara el usuario existente.",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, elimina esto!',
      cancelButtonText:'cancelar'
    }).then((result) => {
      if (result.value) {
        this.persona.persona=this.persona.personas[id];
        this.persona.deletePersona().subscribe(res=>{
          this.getPersonas(); 
          Swal.fire(
            'Eliminado!',
            'has eliminado al usuario.',
            'success'
          )
        }); 
      }
    })  
  }

  obtnerDOM(id :string){
    return (<HTMLInputElement>document.getElementById(id));
   }
   editar(id: number){ 
     this.persona.personas[id].estado=!this.persona.personas[id].estado; 
   }
}
