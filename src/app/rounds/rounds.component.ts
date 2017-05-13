import { Component, OnInit } from '@angular/core';

import { ApiConnService } from './../shared/api-conn.service';

import { Player } from './../players/player.model';

@Component({
  selector: 'nfl-rounds',
  templateUrl: './rounds.component.html',
  styleUrls: ['./rounds.component.css']
})
export class RoundsComponent implements OnInit {
  selectedRound = 0;
  players: Promise<Player[]>;

  constructor(private apiConnService: ApiConnService) { }

  ngOnInit() {
    this.players = this.apiConnService.getPlayers();
  }

}
