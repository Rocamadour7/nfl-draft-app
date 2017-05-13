import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApiConnService } from './../shared/api-conn.service';
import { PlayerService } from './player.service';
import { Player } from "./player.model";

@Component({
  selector: 'nfl-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players: Promise<Player[]>;
  colleges: Promise<any[]>;
  positions: Promise<any[]>;
  selectedPosition = '';
  selectedCollege = '';

  constructor(private apiConnService: ApiConnService, private playerService: PlayerService) { }

  ngOnInit() {
    this.players = this.apiConnService.getPlayers();
    this.colleges = this.apiConnService.getColleges();
    this.positions = this.apiConnService.getPositions();
  }

}
