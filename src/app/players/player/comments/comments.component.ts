import { CommentsService } from './../../../shared/comments.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.sass']
})
export class CommentsComponent implements OnInit {

  @Input('idToComment') idFromPlayers: number;
  comments = [];

  constructor(
    private commnetService: CommentsService
  ) { }

  ngOnInit() {
    this.comments = this.commnetService.getComments(this.idFromPlayers)
    this.commnetService.commentChanges.subscribe(algo => {
      this.comments = algo.filter( word => {
        return word.id === this.idFromPlayers;
      })
      
    })
  }

  submitComment(id: number, name: string, text: string){

   this.commnetService.createComment(+id, name, text);
    //console.log( typeof +id );
  }

}
