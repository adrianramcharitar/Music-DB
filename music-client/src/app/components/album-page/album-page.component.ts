import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/models/album.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.scss']
})
export class AlbumPageComponent implements OnInit {

  albums: Album[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getAllAlbumList();
  }

  getAllAlbumList(){
    this.dataService.getAllAlbums()
    .subscribe((data: any) => {
      console.log(data);
      this.albums = data;
    });
  }

}
