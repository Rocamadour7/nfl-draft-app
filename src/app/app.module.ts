import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "@angular/material";
import "hammerjs";
import { nflRoutingModule } from './app-routing.module';
import { Ng2OrderModule } from "ng2-order-pipe";

import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { TeamsComponent } from './teams/teams.component';
import { RoundsComponent } from './rounds/rounds.component';
import { AboutComponent } from './about/about.component';

import { ApiConnService } from './shared/api-conn.service';

import { FilterPipe } from './shared/filter.pipe';
import { FilterTeamsPipe } from './shared/filter-teams.pipe';
import { FilterRoundsPipe } from './shared/filter-rounds.pipe';
import { LoadingComponent } from './ui/loading/loading.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    TeamsComponent,
    RoundsComponent,
    AboutComponent,
    FilterPipe,
    FilterTeamsPipe,
    FilterRoundsPipe,
    LoadingComponent,
    PlayerDetailsComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    nflRoutingModule,
    Ng2OrderModule
  ],
  providers: [ApiConnService],
  bootstrap: [AppComponent]
})
export class AppModule { }
