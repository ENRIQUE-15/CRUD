import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    public ruta: Router
  ) { }

  ngOnInit() {
  }




  salir(){
    localStorage.clear();
    this.ruta.navigate(['/login']);
  }

}