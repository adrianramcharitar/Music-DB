import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Album } from 'src/app/models/album.model';
import { Artist } from 'src/app/models/artist.model';
import { Song } from 'src/app/models/song.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  currentPage: number = 1;
  @Input() itemPerPage: number;
  @Input() requestType: string

  numResultsReturned: number;
  returnResults: any[];

  @Output() emitReturnResults: EventEmitter<any[]> = new EventEmitter();

  previousButtonDisabled : boolean = true;
  nextButtonDisabled : boolean = false;


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  previousPageClicked(){
    this.currentPage --;
    this.checkPageStatus();

    if(this.currentPage > 1){
    this.fetchResultsByType();
    }
    }


  nextPageClicked(){
    this.currentPage++;
      this.checkPageStatus();
      this.fetchResultsByType();
  }

  checkPageStatus(){
    if(this.currentPage == 1){
      this.previousButtonDisabled = true;
      this.nextButtonDisabled = false;
    }else if(this.currentPage > 1){
      this.previousButtonDisabled = false;
    }else if(this.returnResults.length === 0){
      this.nextButtonDisabled = true;
    }
    }

  fetchResultsByType(){

    switch(this.requestType) {
      case 'artists': {
         this.dataService.getAllArtists(this.currentPage, this.itemPerPage)
         .subscribe((data: Artist[]) => {
          this.returnResults = data;

         });
         break;
      }
      case 'albums': {
         this.dataService.getAllAlbums(this.currentPage, this.itemPerPage)
         .subscribe((data: Album[]) => {
          this.returnResults = data;

         });
         break;
      }
      case 'songs': {
        this.dataService.getAllSongs(this.currentPage, this.itemPerPage)
        .subscribe((data: Song[]) => {
          this.returnResults = data;

      });
      break;
     }
      default: {
         //statements;
         break;
      }
   }
   this.emitReturnResults.emit(this.returnResults);
  }
}

