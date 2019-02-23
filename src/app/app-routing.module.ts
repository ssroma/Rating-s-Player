import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PlayersComponent } from './players/players.component';
import { PlayerComponent } from './players/player/player.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'players', component: PlayersComponent},
  { path: 'players/:id', component: PlayerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
