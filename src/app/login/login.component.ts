import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  msg  from "sweetalert2";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usuario="";
  password="";


  constructor(public ruta: Router) { 
    this.usuario = "";
    this.password = "";
    
  }


  ngOnInit(): void {
    this.usuario = "";
    this.password = "";
    localStorage.clear;
  }

  entrar(){    
    if (this.usuario == "" || this.usuario == undefined ){
      msg.fire("Proporcine el usuario","","warning");
    }
    else{
      if (this.password == "" || this.password == undefined ){
        msg.fire("Proporcine el password","","warning");
      }
      else{
        if (this.usuario == "admin" && this.password == "123456"){                  
        localStorage.setItem('usu', this.usuario);
        this.ruta.navigate(['/dashboard'])
      }
        else{
          msg.fire("Usuario o password incorrecto","","warning");
        }

        }

      }
    }
  }

  

  


