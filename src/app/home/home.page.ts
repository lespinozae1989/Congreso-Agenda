import { AgendaService } from './../servicios/agenda.service';
import { AgregarComponent } from './../agregar/agregar.component';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  contactos = [];

  constructor(private Modal : ModalController, private agendaService: AgendaService) {

    this.contactos = agendaService.getArreglo();

  }

  async AgregarModal() {
    const modal = await this.Modal.create({
      component: AgregarComponent
    });
    return await modal.present();
  }

  eliminar(item: number)
  {
    this.agendaService.eliminar(item);
    this.contactos = this.agendaService.getArreglo();
  }
}
