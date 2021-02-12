import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Album } from 'src/app/models/album.model';
import { Artist } from 'src/app/models/artist.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-artist-profile-page',
  templateUrl: './artist-profile-page.component.html',
  styleUrls: ['./artist-profile-page.component.scss']
})
export class ArtistProfilePageComponent implements OnInit {

  selectedArtist: Artist;
  albumsByArtist: Album[];
  type = "albums";

  constructor(private dataService: DataService, private router: Router) {
    this.selectedArtist = this.router.getCurrentNavigation().extras.state.data;
   }

  ngOnInit(): void {
    this.getAlbumsByArtist(this.selectedArtist.id);
    this.getSelectedArtist(this.selectedArtist.id);
  }

  getAlbumsByArtist(artistId: number){
  this.dataService.getAlbumsByArtistId(artistId)
  .subscribe((data: Album[]) => {
    this.albumsByArtist = data;
  });
  }

  getSelectedArtist(artistId: number){
    this.dataService.getArtistByID(artistId)
    .subscribe((data: Artist) => {
      this.selectedArtist = data;
    });
  }

}
