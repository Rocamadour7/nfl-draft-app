import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/toPromise';

import { Player } from "../players/player.model";
import { College } from './college.model';
import { Position } from './position.model';
import { Team } from './../teams/team.model';

@Injectable()
export class ApiConnService {
  serverHost: string = 'http://localhost:8000/';

  constructor(private http: Http) { }

  getPlayers(): Promise<Player[]> {
    return this.http.get(this.serverHost + 'api/players').toPromise().then((res: Response) => res.json().players);
  }

  getColleges(): Promise<College[]> {
    return this.http.get(this.serverHost + 'api/colleges').toPromise().then((res: Response) => res.json().colleges);
  }

  getPositions(): Promise<Position[]> {
    return this.http.get(this.serverHost + 'api/positions').toPromise().then((res: Response) => res.json().positions);
  }

  getTeams(): Promise<Team[]> {
    return this.http.get(this.serverHost + 'api/teams').toPromise().then((res: Response) => res.json().teams);
  }

}
