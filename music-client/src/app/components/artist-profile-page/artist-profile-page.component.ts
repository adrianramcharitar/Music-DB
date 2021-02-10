import { Component, Input, OnInit } from '@angular/core';
import { Album } from 'src/app/models/album.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-artist-profile-page',
  templateUrl: './artist-profile-page.component.html',
  styleUrls: ['./artist-profile-page.component.scss']
})
export class ArtistProfilePageComponent implements OnInit {


  @Input() artistId;

  artistName: string;
  artistDescription: string;
  albumsByArtist: Album[];

  constructor(private dataService: DataService) {
   }

  ngOnInit(): void {
    this.getAlbumsByArtist(this.artistId);
  }

  getAlbumsByArtist(artistId: number){
  this.dataService.getAlbumsByArtistId(artistId)
  .subscribe((data: any) => {
    this.albumsByArtist = data;
  });
  console.log(this.albumsByArtist);
  }

}
