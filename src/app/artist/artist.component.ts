import {Component, OnDestroy, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {SpotifyService} from "../service/spotify";
import {LocationStrategy} from "@angular/common";

@Component({
  selector: "app-artist",
  templateUrl: "./artist.component.html"
})
export class ArtistComponent implements OnInit, OnDestroy  {
  id: string;
  artist: object;
  private sub: any;

  constructor(private spotify: SpotifyService,
              private route: ActivatedRoute,
              private locationStrategy: LocationStrategy) {
    this.sub = this.route.params.subscribe(params => {
      this.id = params["id"];
    });
  }

  ngOnInit(): void {
    this.spotify.getArtist(this.id).subscribe((res: any) => this.renderArtist(res));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  renderArtist(res: any) {
    this.artist = res;
  }

  back(): void {
    this.locationStrategy.back();
  }
}
