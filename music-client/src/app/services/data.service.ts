import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Artist } from '../models/artist.model';
import {map, catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Album } from '../models/album.model';
import { Song } from '../models/song.model';
@Injectable({
  providedIn: 'root'
})

// Gets artist info from REST endpoint
export class DataService {

  private REST_API_SERVER = 'http://localhost:5000';

  constructor(private httpClient: HttpClient) {
   }

   // Artists
   public getAllArtists(){
    return this.httpClient.get(`${this.REST_API_SERVER}/artists`).
    pipe(
      map((data: Artist[]) =>{
        return data;
      }), catchError (error => {
        return throwError("Something went wrong!")
      })
    );
  }

  // Albums
  public getAllAlbums(){
    return this.httpClient.get(`${this.REST_API_SERVER}/albums`).
    pipe(
      map((data: Album[]) =>{
        return data;
      }), catchError (error => {
        return throwError("Something went wrong!")
      })
    );
  }

  public getAlbumsByArtistId(id: number){
    return this.httpClient.get(`${this.REST_API_SERVER}/albums?artist_id=${id}`);
  }

  // Songs
  public getAllSongs(pageNumber: number, pageLimit: number){
    return this.httpClient.get(`${this.REST_API_SERVER}/songs?_page=${pageNumber}&_limit=${pageLimit}`).
    pipe(
      map((data: Song[]) =>{
        return data;
      }), catchError (error => {
        return throwError("Something went wrong!")
      })
    );
  }

}
