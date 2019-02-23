import { PlayersService } from './../../../shared/players.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.sass']
})
export class LikesComponent implements OnInit {

  @Input('idTolikes') idFromPlayer: number;
  likeUP: number = 0;
  likeDown: number = 0;
  likes: {};
  isDisable: boolean = false;
  notDisable: boolean = false;

  constructor( 
    private service: PlayersService
  ) { }

  ngOnInit() {
    this.likes = this.service.getPlayer(this.idFromPlayer);
    
  }

  likesUp(evt: Event){
    evt.preventDefault();
    this.likeUP = 1;
    if(this.likeDown == 0){
      this.likeDown = 0;
    }else{
      this.likeDown = -1;
    }
    
    this.service.updateLikes(this.idFromPlayer, this.likeUP, this.likeDown);
    this.isDisable = !this.isDisable;
    this.notDisable = false;
  }

  likesDown(evt: Event){
    evt.preventDefault();
    if(this.likeUP == 0 && this.likeDown != 0 ){
      this.likeUP = 1;
    }else{
      this.likeUP = -1;
    }
    this.likeDown = 1;
    this.service.updateLikes(this.idFromPlayer, this.likeUP, this.likeDown);
    this.notDisable = !this.notDisable;
    this.isDisable = false;
  }

}
