import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Artist } from '../models/artist.model';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Album } from '../models/album.model';
import { Song } from '../models/song.model';
@Injectable({
  providedIn: 'root',
})

// Gets artist info from REST endpoint
export class DataService {
  private REST_API_SERVER = 'http://localhost:5000';

  constructor(private httpClient: HttpClient) {}

  //Generic Request
  public getGenericRequest(
    requestType: string,
    pageNumber: number,
    pageLimit: number
  ) {
    return this.httpClient.get<any[]>(
      `${this.REST_API_SERVER}/${requestType}?_page=${pageNumber}&_limit=${pageLimit}`
    );
  }

  // Artists
  public getAllArtists(pageNumber: number, pageLimit: number) {
    return this.httpClient.get<Artist[]>(
      `${this.REST_API_SERVER}/artists?_page=${pageNumber}&_limit=${pageLimit}`
    );
  }

  public getArtistByID(id: number) {
    return this.httpClient.get<Artist>(`${this.REST_API_SERVER}/artists/${id}`);
  }

  // Albums
  public getAllAlbums(pageNumber: number, pageLimit: number) {
    return this.httpClient.get<Album[]>(
      `${this.REST_API_SERVER}/albums?_page=${pageNumber}&_limit=${pageLimit}`
    );
  }

  public getAlbumsByArtistId(
    id: number,
    pageNumber: number,
    pageLimit: number
  ) {
    return this.httpClient.get<Album[]>(
      `${this.REST_API_SERVER}/albums?_page=${pageNumber}&_limit=${pageLimit}&artist_id=${id}`
    );
  }

  // Songs
  public getAllSongs(pageNumber: number, pageLimit: number) {
    return this.httpClient.get<Song[]>(
      `${this.REST_API_SERVER}/songs?_page=${pageNumber}&_limit=${pageLimit}`
    );
  }

  public getSongsById(id: number, pageNumber: number, pageLimit: number) {
    return this.httpClient.get<Song[]>(
      `${this.REST_API_SERVER}/songs?_page=${pageNumber}&_limit=${pageLimit}&album_id=${id}`
    );
  }
}
