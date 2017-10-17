import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SpotifyService} from '../service/spotify';
import {LocationStrategy} from "@angular/common";

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html'
})
export class TrackComponent implements OnInit, OnDestroy {
  id: string;
  track: object;
  private sub: any;

  constructor(private spotify: SpotifyService,
              private route: ActivatedRoute,
              public locationStrategy: LocationStrategy) {

    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  ngOnInit() {
    this.spotify.getTrack(this.id).subscribe((res: any) => this.renderTrack(res));
  }

  renderTrack(res: any): void {
    this.track = res;
  }

  back(): void {
    this.locationStrategy.back();
  }
}
