import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {ArtistComponent} from "./artist/artist.component";
import {AlbumComponent} from "./album/album.component";
import {TrackComponent} from "./track/track.component";
import {SearchComponent} from "./search/search.component";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {LoginComponent} from "./login/login.component";
import {GUARD_PROVIDERS, LoggedInGuard} from "./auth/logged";

import {SPOTIFY_PROVIDERS} from "./service/spotify";
import {AUTH_PROVIDERS} from "./auth/authorization";

const appRoutes: Routes = [
  {path: "", redirectTo: "search", pathMatch: "full"},
  {path: "search", component: SearchComponent, canActivate: [LoggedInGuard]},
  {path: "artists/:id", component: ArtistComponent},
  {path: "tracks/:id", component: TrackComponent},
  {path: "login", component: LoginComponent},
  {path: "albums/:id", component: AlbumComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    AlbumComponent,
    TrackComponent,
    SearchComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true}),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SPOTIFY_PROVIDERS, AUTH_PROVIDERS, GUARD_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule {
}
