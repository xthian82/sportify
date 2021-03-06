import {Component, OnInit} from "@angular/core";
import {SpotifyService} from "../service/spotify";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: "app-search",
  providers: [SpotifyService],
  templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {

  query: string;
  results: Object;

  constructor(private spotify: SpotifyService,
              private router: Router,
              private route: ActivatedRoute) {
    this.route
    .queryParams
    .subscribe(params => {
      this.query = params["query"] || "";
    });
  }

  ngOnInit() {
    this.search();
  }

  search() {
    console.log(this.query);
    if (!this.query) {
      return;
    }

    this.spotify.searchTrack(this.query)
    .subscribe((res: any) => this.renderResults(res));
  }

  renderResults(res: any): void {
    this.results = null;
    if (res && res.tracks && res.tracks.items) {
      this.results = res.tracks.items;
    }
  }

  submit(query: string): void {
    this.router.navigate(["search"], {queryParams: {query: query}}).then(_ => this.search());
  }

}
