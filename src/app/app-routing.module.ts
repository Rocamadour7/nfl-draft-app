import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { PlayersComponent } from './players/players.component';
import { TeamsComponent } from './teams/teams.component';
import { RoundsComponent } from './rounds/rounds.component';
import { AboutComponent } from './about/about.component';

const nflRoutes: Routes = [
    { path: 'players', component: PlayersComponent },
    { path: 'teams', component: TeamsComponent },
    { path: 'rounds', component: RoundsComponent },
    { path: 'about', component: AboutComponent }
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