import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { AppRoutingModule } from './app-routing.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  declarations: [AppComponent, ServerComponent, ServersComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule, TasksModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
