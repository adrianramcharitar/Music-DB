import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/models/artist.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrls: ['./artist-page.component.scss']
})

export class ArtistPageComponent implements OnInit {

  artists: Artist[] = [];
  type = "artists";
  pageNumber: number = 1;
  resultsPerPage: number = 10;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getAllArtistList(this.pageNumber);
  }

  getAllArtistList(pageNumber: number){
    this.dataService.getAllArtists(pageNumber, this.resultsPerPage)
    .subscribe((data: Artist[]) => {
      this.artists = data;
      console.log(this.artists);
    });
  }
  getNewList(newList: any[]) {
    this.artists = newList;
  }
}
