import { Component, Input, OnInit } from '@angular/core';
import { Album } from 'src/app/models/album.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.scss']
})
export class AlbumPageComponent implements OnInit {

  @Input() artistID: number;
  albums: Album[];
  pageNumber: number = 1;
  resultsPerPage: number = 10;
  type = "albums";

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getAllAlbumList(this.pageNumber);
  }

  getAllAlbumList(pageNumber: number){
    this.dataService.getAllAlbums(pageNumber, this.resultsPerPage)
    .subscribe((data: any) => {
      console.log(data);
      this.albums = data;
    });
  }

  getNewList(newList: any[]) {
    this.albums = newList;
  }

}
