import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Album } from 'src/app/models/album.model';
import { Song } from 'src/app/models/song.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-album-profile-page',
  templateUrl: './album-profile-page.component.html',
  styleUrls: ['./album-profile-page.component.scss'],
})
export class AlbumProfilePageComponent implements OnInit {
  selectedAlbum: Album;
  songsInAlbum: Song[];
  type = 'albums';
  pageNumber: number = 1;
  resultsPerPage: number = 10;

  constructor(private dataService: DataService, private router: Router) {
    this.selectedAlbum = this.router.getCurrentNavigation().extras.state.data;
  }

  ngOnInit(): void {
    this.getSongsInAlbum(this.selectedAlbum.id);
    this.getSelectedAlbum(this.selectedAlbum.id);
  }

  getSongsInAlbum(albumId: number) {
    this.dataService
      .getSongsById(albumId, this.pageNumber, this.resultsPerPage)
      .subscribe((data: Song[]) => {
        this.songsInAlbum = data;
      });
  }

  getSelectedAlbum(selectedAlbumId: number) {
    this.dataService.getArtistByID(selectedAlbumId).subscribe((data: Album) => {
      this.selectedAlbum = data;
    });
  }
}
