import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  commentChanges = new EventEmitter<{id: number, name: string, comment: string}[]>();

  comments = [ 
    {
      id: 1,
      name: "Sandro Almeida",
      comment: "O melhor que ja vi em campo. "
    },
    {
      id: 2,
      name: "Dalto Amaral",
      comment: "O melhor de todos os tempo nunca vi melhor em campo. "
    },
    {
      id: 1,
      name: "Daneil Takay",
      comment: "O maior dos Maiores. "
    },
    {
      id: 3,
      name: "Joao Amaro",
      comment: "Muito bom de bola. "
    },
    {
      id: 4,
      name: "Sandro Almeida",
      comment: "O melhor Goleiro do mundo. "
    },
    {
      id: 4,
      name: "Julio Andrade",
      comment: "Mito do gol, numero 1 do mundo."
    },
    {
      id: 3,
      name: "Sandro Almeida",
      comment: "Simplesmente crack de bola."
    },
    {
      id: 2,
      name: "Arthur Fonseca",
      comment: "Nao tem um nome melhor para ele que fenomeno"
    },
  ]

  

  constructor() { }
  getAllComments(){
    return this.comments.slice();
  }

  getComments(id: number){
    const comment = this.comments.filter( word => {
      return word.id === id;
    })
    return comment.slice();
    
  }

  createComment(id: number, name: string, text: string){
    let newComment = {id: id, name: name, comment: text};
    this.comments.push(newComment);
    console.log("Add to comments ." +  this.comments.length );
    this.commentChanges.emit(this.comments);
  }



}
