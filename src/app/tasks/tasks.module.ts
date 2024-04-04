import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { TasksComponent } from './tasks.component';
import { PractisingDatabindingComponent } from './practising-databinding/practising-databinding.component';
import { PractisingDirectivesComponent } from './practising-directives/practising-directives.component';

@NgModule({
  declarations: [
    WarningAlertComponent,
    SuccessAlertComponent,
    TasksComponent,
    PractisingDatabindingComponent,
    PractisingDirectivesComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [TasksComponent],
})
export class TasksModule {}
