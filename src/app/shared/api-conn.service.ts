import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";

import { PlayerService } from './../players/player.service';

@Injectable()
export class ApiConnService {
  serverHost: string = 'http://localhost:8000/';

  constructor(private http: Http, private playerService: PlayerService) { }

  getPlayers() {
    this.http.get(this.serverHost + '/api/players')
      .map((response: Response) => {
        const players = response.json().players;
        return players;
      }).subscribe((players) => {
        this.playerService.setPlayers(players);
      });
  }

}
