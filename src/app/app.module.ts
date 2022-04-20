import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReposComponent } from './repos/repos.component';
import { UsersComponent } from './users/users.component';
import { DatePipePipe } from './date-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NavbarComponent,
    ReposComponent,
    UsersComponent,
    DatePipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
