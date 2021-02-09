import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/models/artist.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrls: ['./artist-page.component.scss']
})
export class ArtistPageComponent implements OnInit {

  artists: Artist[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getAllArtistList();
  }

  getAllArtistList(){
    this.dataService.getAllArtists()
    .subscribe((data: any) => {
      console.log(data);
      this.artists = data;
    });
  }

  populateArtistList(){


  }

}
