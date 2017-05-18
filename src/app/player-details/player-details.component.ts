import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";

import { ApiConnService } from './../shared/api-conn.service';

import { Player } from './../players/player.model';

@Component({
  selector: 'nfl-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {
  player: Promise<Player>;
  id: number;
  showLoading: boolean = true;

  constructor(private apiConnService: ApiConnService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.player = this.apiConnService.getPlayer(this.id);
    });
    this.player.then(() => this.showLoading = false);
  }

  goBack() {
    this.location.back();
  }

}
