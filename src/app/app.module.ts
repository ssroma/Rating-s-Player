import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PlayersComponent } from './players/players.component';
import { HomeComponent } from './home/home.component';
import { PlayerComponent } from './players/player/player.component';
import { LikesComponent } from './players/player/likes/likes.component';
import { CommentsComponent } from './players/player/comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PlayersComponent,
    HomeComponent,
    PlayerComponent,
    LikesComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
