import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../shared/players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.sass']
})
export class PlayersComponent implements OnInit {

  players = [];

  constructor(private service: PlayersService) { }

  ngOnInit() {
    this.players = this.service.getAll();
  }

}
