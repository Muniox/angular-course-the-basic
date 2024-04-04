import { Component } from '@angular/core';

interface Log {
  id: number
  timestamp: number
}

@Component({
  selector: 'app-practising-directives',
  templateUrl: './practising-directives.component.html',
  styleUrl: './practising-directives.component.css'
})
export class PractisingDirectivesComponent {
  logs:Log[] = [];
  date = new Date()
  hours = this.date.getHours()
  minutes = this.date.getMinutes()

  logButtonClick() {
    this.logs.push({id: this.logs.length + 1, timestamp: new Date().})
  }

}
