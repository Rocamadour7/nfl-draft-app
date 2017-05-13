import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class PlayerService {
  playersChanged = new EventEmitter<any>();
  collegesChanged = new EventEmitter<any>();
  positionsChanged = new EventEmitter<any>();
  players = [];
  colleges = [];
  positions = [];

  constructor() { }

  setPlayers(players) {
    this.players = players;
    this.playersChanged.emit(this.players);
  }

  setColleges(colleges) {
    this.colleges = colleges;
    this.collegesChanged.emit(this.colleges);
  }

  setPositions(positions) {
    this.positions = positions;
    this.positionsChanged.emit(this.positions);
  }

}
