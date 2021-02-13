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
  type = "songs";
  pageNumber: number = 1;
  resultsPerPage: number = 10;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getAllSongsList(this.pageNumber);
  }

  getAllSongsList(pageNumber: number,){
    this.dataService.getAllSongs(pageNumber, this.resultsPerPage)
    .subscribe((data: any) => {
      this.songs = data;
    });
  }

  getNewList(newList: any[]) {
    this.songs = newList;
  }

}
