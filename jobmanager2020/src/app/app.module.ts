import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './main/app.component';
import { UserregistrationComponent } from './components/userregistration/userregistration.component';
import { AccountServiceService } from './services/account-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, UserregistrationComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [AccountServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
