import { Component, OnInit } from '@angular/core';

import { ApiConnService } from './../shared/api-conn.service';
import { PlayerService } from './player.service';

@Component({
  selector: 'nfl-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players = [];

  constructor(private apiConnService: ApiConnService, private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService.playersChanged.subscribe((players) => {
      this.players = players;
    });
  }

}
