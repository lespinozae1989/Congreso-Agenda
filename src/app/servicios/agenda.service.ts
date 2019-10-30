import { Injectable } from '@angular/core';

interface Datos {
  nombre: string;
  numero: number;
}

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  arreglo: Array<{nombre: string, numero: number}> = [];

  constructor() { }

  agregar(nombre: string, numero: number)
  {
      this.arreglo.push({nombre, numero});
  }

  getArreglo()
  {
    return this.arreglo;
  }

  eliminar(item: number)
  {
    this.arreglo = this.arreglo.filter(
      (i) => i.numero !== item );
  }
}
