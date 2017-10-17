import {Http, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Injectable} from '@angular/core';
import {Headers} from '@angular/http';

import 'rxjs/add/operator/map';

// export let CLIENT_ID = '572f5a0c773747eda7859225c853baa0';
// export let CLIENT_SECRET = '9162464c3024490ba218b4ad56dc46e7';
export let ACCESS_TOKEN = 'BQAfzbF8FotDh2us7fV7HyA6MFpgANj40BN7tu1i2Ce4J0qiz76UPDm9XJi6KHtRLTRvPH6zjbPAi7_iaKyXLg';

@Injectable()
export class SpotifyService {
  static BASE_URL = 'https://api.spotify.com/v1';

  constructor(public http: Http) {
  }

  query(URL: string, params?: Array<string>): Observable<any[]> {
    let queryURL = `${SpotifyService.BASE_URL}${URL}`;
    if (params) {
      queryURL = `${queryURL}?${params.join('&')}`;
    }

    const headers: Headers = new Headers();
    headers.append('Authorization', `Bearer ${ACCESS_TOKEN}`);

    const opts: RequestOptions = new RequestOptions();
    opts.headers = headers;

    return this.http.request(queryURL, opts).map((res: any) => res.json());
  }

  search(query: string, type: string): Observable<any[]> {
    return this.query(`/search`, [`q=${query}`, `type=${type}`]);
  }

  searchTrack(query: string): Observable<any[]> {
    return this.search(query, 'track');
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
