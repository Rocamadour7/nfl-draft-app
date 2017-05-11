import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class PlayerService {
  playersChanged = new EventEmitter<any>();
  players = [];

  constructor() { }

  setPlayers(players) {
    this.players = players;
    this.playersChanged.emit(this.players);
  }

  

}
