import { Component, OnInit } from '@angular/core';

import { ApiConnService } from './../shared/api-conn.service';

import { Player } from "./player.model";
import { College } from './../shared/college.model';
import { Position } from './../shared/position.model';

@Component({
  selector: 'nfl-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players: Promise<Player[]>;
  colleges: Promise<College[]>;
  positions: Promise<Position[]>;
  selectedPosition = '';
  selectedCollege = '';
  showLoading: boolean = true;

  constructor(private apiConnService: ApiConnService) { }

  ngOnInit() {
    this.players = this.apiConnService.getPlayers();
    this.colleges = this.apiConnService.getColleges();
    this.positions = this.apiConnService.getPositions();
    this.players.then(() => this.showLoading = false);
  }

}
