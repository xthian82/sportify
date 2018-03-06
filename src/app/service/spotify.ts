import {Http, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {Headers} from "@angular/http";

import "rxjs/add/operator/map";
import {HttpHeaders} from "@angular/common/http";

// export let CLIENT_ID = "572f5a0c773747eda7859225c853baa0";
// export let CLIENT_SECRET = "9162464c3024490ba218b4ad56dc46e7";
export let ACCESS_TOKEN = "BQCn8JgWH46qbX3VjlH_9dY_8_2tuNY9Dt8_0_rAvLq6dB_-daPvjqt5toP0hFkM5L68JpQy9xU1ANVpK0dzLQ";

@Injectable()
export class SpotifyService {
  static BASE_URL = "https://api.spotify.com/v1";
  // authCode: string;
  accessToken = "BQAWJhPjkD91Exhwm-y5xNbStWGIYLM5X_nMYaVIdxTVl80RMHIm-WysFL5NMOKZky43F7KeJk-2OPnfM_CXFg";

  constructor(public http: Http) {

    /*
    this.authCode = btoa(CLIENT_ID + ":" + CLIENT_SECRET);

    const headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    headers.append("Authorization", `Basic ${this.authCode}`);
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Max-Age", "3600");
    headers.append("Accept", "application/json, application/x-www-form-urlencoded");

    const opts: RequestOptions = new RequestOptions({headers: headers});

    const body = JSON.stringify({grant_type: "client_credentials"});

    // this.http.post("https://accounts.spotify.com/api/token", body, opts).map((res: any) => res.json())
    // .subscribe((res: any) => {
    //  console.log(`response is : ${res.json()}`);
    // });
    */
  }

  query(URL: string, params?: Array<string>): Observable<any[]> {
    let queryURL = `${SpotifyService.BASE_URL}${URL}`;
    if (params) {
      queryURL = `${queryURL}?${params.join("&")}`;
    }

    const headers: Headers = new Headers();
    headers.append("Authorization", `Bearer ${this.accessToken}`);

    const opts: RequestOptions = new RequestOptions({headers: headers});

    return this.http.request(queryURL, opts).map((res: any) => res.json());
  }

  search(query: string, type: string): Observable<any[]> {
    return this.query(`/search`, [`q=${query}`, `type=${type}`]);
  }

  searchTrack(query: string): Observable<any[]> {
    return this.search(query, "track");
  }

  getTrack(id: string): Observable<any[]> {
    return this.query(`/tracks/${id}`);
  }

  getArtist(id: string): Observable<any[]> {
    return this.query(`/artists/${id}`);
  }

  getAlbum(id: string): Observable<any[]> {
    return this.query(`/albums/${id}`);
  }
}

export let SPOTIFY_PROVIDERS: Array<any> = [
  {provide: SpotifyService, useClass: SpotifyService}
];
