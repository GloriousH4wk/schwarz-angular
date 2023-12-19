import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {

  allowNewServer: boolean = false;

  constructor() {
    setTimeout(()=> {
      this.allowNewServer = true;
    }, 2000);
  }

}