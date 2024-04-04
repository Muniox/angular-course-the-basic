import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  // template: `
  //   <app-server />
  //   <app-server />
  //   <app-server />
  //   <app-server />
  // `,
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
})
export class ServersComponent {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created!';
  serverName: string = '';
  serverCreated: boolean = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = `Server was created! Name is ${this.serverName}`;
    this.serverCreated = true;
  }

  // onUpdateServerName(event: Event) {
  //   const input = <HTMLInputElement>event.target;
  //   this.serverName = input.value;
  // }
}
