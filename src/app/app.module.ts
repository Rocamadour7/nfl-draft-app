import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "@angular/material";
import "hammerjs";
import { nflRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { TeamsComponent } from './teams/teams.component';
import { RoundsComponent } from './rounds/rounds.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    TeamsComponent,
    RoundsComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    nflRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
