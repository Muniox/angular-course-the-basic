import { Component } from '@angular/core';

interface Log {
  id: number;
  timestamp: string;
}

@Component({
  selector: 'app-practising-directives',
  templateUrl: './practising-directives.component.html',
  styleUrl: './practising-directives.component.css',
})
export class PractisingDirectivesComponent {
  logs: Log[] = [];
  paragraphToggle = true;

  onLogButtonClick() {
    const date = new Date();

    this.logs.push({
      id: this.logs.length + 1,
      timestamp: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
    });

    this.paragraphToggle = !this.paragraphToggle;
  }
}
