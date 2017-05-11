import { Component, OnInit } from '@angular/core';

import { ApiConnService } from './shared/api-conn.service';

@Component({
  selector: 'nfl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private apiConnService: ApiConnService) { }

  ngOnInit() {
    this.apiConnService.getPlayers();
  }
}
