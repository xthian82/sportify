import {Component, OnDestroy, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {SpotifyService} from "../service/spotify";
import {LocationStrategy} from "@angular/common";

@Component({
  selector: "app-album",
  templateUrl: "./album.component.html"
})
export class AlbumComponent implements OnInit, OnDestroy {
  id: string;
  album: object;
  private sub: any;

  constructor(private spotify: SpotifyService,
              private locationStrategy: LocationStrategy,
              private route: ActivatedRoute) {
    this.sub = this.route.params.subscribe(params => {
      this.id = params["id"];
    });
  }

  ngOnInit(): void {
    this.spotify.getAlbum(this.id).subscribe((res: any) => this.renderAlbum(res));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  renderAlbum(res: any): void {
    this.album = res;
  }

  back(): void {
    this.locationStrategy.back();
  }
}
