import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { OperadorService } from 'src/app/services/operador.service';
import { Factura } from 'src/app/models/factura';
import { Persona } from 'src/app/models/persona';
import { Linea } from 'src/app/models/linea';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-user-list-factures',
  templateUrl: './user-list-factures.component.html',
  styleUrls: ['./user-list-factures.component.css']
})
export class UserListFacturesComponent implements OnInit {

  constructor(private ruta:ActivatedRoute,private factura:OperadorService) {
    
   }

  ngOnInit() {
    this.ruta.params.subscribe(res=>{
      console.log(res['persona']); 
      console.log(res['emision']);
      this.factura.persona=new Persona();
      this.factura.persona.cedula=res['persona'];
      this.factura.factura.persona=res['persona'];
      this.factura.factura.emision=res['emision'].split('T')[0];
      this.factura.getPersona().subscribe(res=>{
        this.factura.persona=<Persona>res[0];
        console.log(res); 
      });
      this.factura.getLineasPersona(res['persona']).subscribe(res=>{
        this.factura.linea=<Linea>res[0];
       
        console.log( this.factura.linea); 
      });
       
      this.factura.getFacturasPersona().subscribe(res=>{
         this.factura.facturas=res as Factura[];
         console.log(res); 
      });
    });
  }
  
  deleteFactura(id:string){
    Swal.fire({
      title: 'estas seguro?',
      text: "se eliminara la factura existente.",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, elimina esto!',
      cancelButtonText:'cancelar'
    }).then(res=>{
      if (res.value) {
        this.factura.deleteFacturaPersona(id).subscribe(res=>{
          console.log(res);
          this.factura.getFacturasPersona().subscribe(res=>{
            this.factura.facturas=res as Factura[];
            console.log(res); 
            Swal.fire(
              'Eliminado!',
              'has eliminado la factura.',
              'success'
            )
         });
        });
      }
    }) 
  }  
  cosultar(){
    this.factura.factura.emision=this.obtnerDOM("date").value;
    console.log( this.factura.factura.emision);
    if (this.factura.factura.emision.length>9) {
      this.factura.getFacturasPersona().subscribe(res=>{
        this.factura.facturas=res as Factura[];
        console.log(res); 
     }); 
    }else{
      Swal.fire(
        'alerta!',
        'asegurese que el campo fecha no este vacio ni posea fechas invalidas',
        'warning'
      )
    }
   
  }
  obtnerDOM(id :string){ 
    return (<HTMLInputElement>document.getElementById(id)); 
   }
}
