import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ServiceBDService } from 'src/app/service/service-bd.service';
import { Extraerdatosusuario } from 'src/app/service/usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  nombre: string = "";
  apellido: string = "";
  correo: string = "";
  telefono: string = "";
  contrasena: string = "";

  datosPerfil: Extraerdatosusuario | null = null;
  
  constructor(private router: Router, private bdService: ServiceBDService) { 
    
  }

  ngOnInit() {
    this.loadProfile();
  }

  loadProfile() {
    this.bdService.fetchExtraerdatosusuario().subscribe(datos => {
      if (datos.length > 0) {
        this.datosPerfil = {
          ...datos[0],
          imagen_user: datos[0].imagen_user ?? undefined // Usa undefined en lugar de null
        };
      }
    });
  }  
  
  // Función para convertir el Blob de la imagen en una URL de objeto
  getImageUrl(blob: Blob): string {
    return URL.createObjectURL(blob);
  }
  
  Home(){
    let navigationextras: NavigationExtras = {

    }
    this.router.navigate(['/home'], navigationextras);
  }
  modificarperfil(){
    let navigationextras: NavigationExtras = {

    }
    this.router.navigate(['/modificarperfil'], navigationextras);
  }
}
