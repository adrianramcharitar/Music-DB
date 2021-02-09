import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// Gets artist info from REST endpoint
export class DataService {

  private REST_API_SERVER = "http://localhost:5000";

  constructor(private httpClient: HttpClient) {
   }

   public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER);
  }
}
