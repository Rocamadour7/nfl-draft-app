import { Component, OnInit } from '@angular/core';

import { ApiConnService } from './../shared/api-conn.service';
import { PlayerService } from './../players/player.service';
import { TeamService } from './team.service';

import { Player } from './../players/player.model';
import { Team } from './team.model';

@Component({
  selector: 'nfl-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  players: Promise<Player[]>;
  teams: Promise<Team[]>;
  selectedTeam = '';

  constructor(private apiConnService: ApiConnService, private playerService: PlayerService, private teamService: TeamService) { }

  ngOnInit() {
    this.teams = this.apiConnService.getTeams();
    this.players = this.apiConnService.getPlayers();
  }

}
