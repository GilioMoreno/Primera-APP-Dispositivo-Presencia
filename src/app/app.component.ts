import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    
    { title: 'Inicio', url: '/inicio', icon: 'person' },
    { title: 'Activar', url: '/activar', icon: 'checkmark-circle' },
    { title: 'Salir', url: '/desactivar', icon: 'close-circle' }
    
      ];
  
  constructor() {}
}
