import { AgendaService } from './../servicios/agenda.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss'],
})
export class AgregarComponent implements OnInit {

  nombre: string;
  numero: number;
  
  constructor(public agendaService: AgendaService) {}

  ngOnInit() {}

  agregarDatos()
  {
    this.agendaService.agregar(this.nombre, this.numero);
  }

}
