import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent implements OnInit {

  serverId: number = 10
  serverStatus: string = 'offline'

  // called when the component is created
  constructor () {  
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
  }

  getServerStatus() {
    return this.serverStatus
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red' 
  }



  // allowNewServer: boolean = false
  // serverCreationStatus = 'No server was created!'
  // serverName = ''

  // constructor() {
  //   setTimeout(()=> {
  //     this.allowNewServer = true;
  //   }, 2000);
  // }

  ngOnInit() {  }

  // onCreateServer() {
  //   this.serverCreationStatus = 'Server was created!';
  // }

  // onUpdateServerName(event: Event) {
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }
}
