import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Nosotros', url: 'nosotros', icon: 'mail' },
    { title: 'Bienestar Universitario', url: 'bienestar', icon: 'paper-plane' },
    { title: 'Contactos UPC', url: 'contactos', icon: 'heart' },
    { title: 'Restaurante', url: 'restaurante', icon: 'archive' },

  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
