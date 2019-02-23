import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  players = [
    { 
      id: 1,
      name: "Pele", 
      position: "Atacante", 
      country: "Brasil", 
      photo: "https://www.esquireme.com/sites/default/files/styles/full_img/public/images/2016/03/14/Pele-box_wide.jpg?itok=QI1Gqd9c",
      likeUp: 50,
      likeDown: 0
    },
    { 
      id: 2,
      name: "Ronaldo", 
      position: "Atacante", 
      country: "Brasil", 
      photo: "https://www.sgagora.com.br/sg/wp-content/uploads/2015/01/ronaldo9-e1421404840502.jpg",
      likeUp: 43,
      likeDown: 2
    },
    { 
      id: 3,
      name: "Lionel Messi", 
      position: "Atacante", 
      country: "Argentina", 
      photo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Messi_vs_Nigeria_2018.jpg",
      likeUp: 38,
      likeDown: 10
    },
    { 
      id: 4,
      name: "Gianluigi Buffon", 
      position: "Goleiro", 
      country: "Italia", 
      photo: "http://www.politicaleconomistng.com/wp-content/files/2018/05/Buffon-660x400.jpg",
      likeUp: 32,
      likeDown: 12
    },
    { 
      id: 5,
      name: "Zinedine Zidane", 
      position: "Meio campo", 
      country: "Franca", 
      photo: "https://cbsnews3.cbsistatic.com/hub/i/r/2010/06/15/77035c8a-a642-11e2-a3f0-029118418759/resize/620x465/5f16e857a98584583fca3aa0652f74be/Zinedine-Zidane.jpg",
      likeUp: 39,
      likeDown: 14
    },
   ]



  constructor() { }

  getAll(){
    return this.players;
  }

  getPlayer(id: number){
    const player = this.players.find(
      (arrayId) => {
        return arrayId.id === id;
      }
    )
    return player;
  }

  updateLikes(id: number, likeUp: number, likeDown: number){
    const player = this.players.find(
      (arrayId) => {
        return arrayId.id === id;
      }
    )
    if(player){
      player.likeUp += likeUp;

      if(player.likeDown == 0 ){
        player.likeDown;
      }else{
        player.likeDown += likeDown;
      }
      
    }
    //console.log(`Likes Up is :  ${player.likeUp}`);
    //console.log(`Likes Down is :  ${player.likeDown}`);
  }


}
