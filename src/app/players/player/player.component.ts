import { PlayersService } from './../../shared/players.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.sass']
})
export class PlayerComponent implements OnInit {

  private players: { id: number, name: string, position: string, country: string, photo: string };

  constructor(
    private route: ActivatedRoute,
    private service: PlayersService
  ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe( (param) => {
        let ids = +param.get('id'); 
        this.players = this.service.getPlayer(ids);
      })
     
      //console.log(this.players)
  }

}
