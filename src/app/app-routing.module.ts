import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { PlayersComponent } from './players/players.component';
import { TeamsComponent } from './teams/teams.component';
import { RoundsComponent } from './rounds/rounds.component';
import { AboutComponent } from './about/about.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const nflRoutes: Routes = [
    { path: '', redirectTo: 'players', pathMatch: 'full' },
    { path: 'players', component: PlayersComponent },
    { path: 'teams', component: TeamsComponent },
    { path: 'rounds', component: RoundsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'player/:id', component: PlayerDetailsComponent },
    { path: '**', component: PageNotFoundComponent }

];

@NgModule({
    imports: [
        RouterModule.forRoot(nflRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class nflRoutingModule {}