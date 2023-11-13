import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DettaglioComponent } from './dettaglio/dettaglio.component';
import { HomeComponent } from './home/home.component';
import { ApiService } from './_services/api.service';
import { DrinkCardComponent } from './drink-card/drink-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DettaglioComponent,
    DrinkCardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
