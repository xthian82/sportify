import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';
import { TrackComponent } from './track/track.component';
import { SearchComponent } from './search/search.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {SPOTIFY_PROVIDERS} from './service/spotify';
import {HttpModule} from '@angular/http';

const appRoutes: Routes = [
  {path: '', redirectTo: '/search', pathMatch: 'full'},
  { path: 'search', component: SearchComponent},
  { path: 'artists/:id', component: ArtistComponent },
  { path: 'tracks/:id', component: TrackComponent },
  { path: 'albums/:id', component: AlbumComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    AlbumComponent,
    TrackComponent,
    SearchComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes,  {useHash: true}),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SPOTIFY_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
