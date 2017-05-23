import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { ApiConnService } from './../shared/api-conn.service';

import { Player } from './../players/player.model';

@Component({
  selector: 'nfl-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {
  apiURL: string;
  id: number;
  player: Promise<Player>;
  showLoading: boolean = true;

  constructor(private apiConnService: ApiConnService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.apiURL = this.apiConnService.serverHost;
    this.id = +this.route.snapshot.params['id'];
    this.player = this.apiConnService.getPlayer(this.id);
    this.player.then((player) => {
      this.showLoading = false;
      console.log(this.player);
    });
  }

  goBack() {
    this.location.back();
  }

}
