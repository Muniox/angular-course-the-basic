import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { TasksComponent } from './tasks.component';
import { PractisingDatabindingComponent } from './practising-databinding/practising-databinding.component';

@NgModule({
  declarations: [
    WarningAlertComponent,
    SuccessAlertComponent,
    TasksComponent,
    PractisingDatabindingComponent,
  ],
  imports: [CommonModule],
  exports: [TasksComponent],
})
export class TasksModule {}
