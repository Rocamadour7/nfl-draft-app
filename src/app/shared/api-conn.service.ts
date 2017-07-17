import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/toPromise';

import { Player } from "../players/player.model";
import { College } from './college.model';
import { Position } from './position.model';
import { Team } from './../teams/team.model';

@Injectable()
export class ApiConnService {
  serverHost: string = 'http://127.0.0.1:8000/';

  constructor(private http: Http) { }

  getPlayers(): Promise<Player[]> {
    return this.http.get(this.serverHost + 'api/players')
               .toPromise()
               .then((res: Response) => res.json().players)
               .catch(this.handleError);
  }

  getColleges(): Promise<College[]> {
    return this.http.get(this.serverHost + 'api/colleges')
               .toPromise()
               .then((res: Response) => res.json().colleges)
               .catch(this.handleError);
  }

  getPositions(): Promise<Position[]> {
    return this.http.get(this.serverHost + 'api/positions')
               .toPromise()
               .then((res: Response) => res.json().positions)
               .catch(this.handleError);
  }

  getTeams(): Promise<Team[]> {
    return this.http.get(this.serverHost + 'api/teams')
               .toPromise()
               .then((res: Response) => res.json().teams)
               .catch(this.handleError);
  }

  getPlayer(id: number): Promise<Player> {
    return this.http.get(this.serverHost + 'api/player/' + id)
               .toPromise()
               .then((res: Response) => res.json().player)
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error ocurred', error);
    return Promise.reject(error.message || error);
  }

}
