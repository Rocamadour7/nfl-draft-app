import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/toPromise';

import { PlayerService } from './../players/player.service';
import { TeamService } from './../teams/team.service';
import { Player } from "../players/player.model";

@Injectable()
export class ApiConnService {
  serverHost: string = 'http://localhost:8000/';

  constructor(private http: Http, private playerService: PlayerService, private teamService: TeamService) { }

  getPlayers(): Promise<Player[]> {
    return this.http.get(this.serverHost + 'api/players').toPromise().then((res: Response) => res.json().players);
  }

  getColleges(): Promise<any[]> {
    return this.http.get(this.serverHost + 'api/colleges').toPromise().then((res: Response) => res.json().colleges);
  }

  getPositions(): Promise<any[]> {
    return this.http.get(this.serverHost + 'api/positions').toPromise().then((res: Response) => res.json().positions);
  }

  getTeams(): Promise<any[]> {
    return this.http.get(this.serverHost + 'api/teams').toPromise().then((res: Response) => res.json().teams);
  }

}
