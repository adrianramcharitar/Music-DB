import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/models/song.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-song-page',
  templateUrl: './song-page.component.html',
  styleUrls: ['./song-page.component.scss']
})
export class SongPageComponent implements OnInit {

  songs: Song[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getAllSongsList(1, 10);
  }

  getAllSongsList(pageNumber: number, pageLimit: number){
    this.dataService.getAllSongs(pageNumber, pageLimit)
    .subscribe((data: any) => {
      this.songs = data;
    });
  }

  nextPage(){

  }

  previousPage(){

  }

}
