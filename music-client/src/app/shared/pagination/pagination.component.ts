import { ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Album } from 'src/app/models/album.model';
import { Artist } from 'src/app/models/artist.model';
import { Song } from 'src/app/models/song.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  currentPage: number = 1;
  @Input() itemPerPage: number;
  @Input() requestType: string;
  @Input() isFilterById: boolean;

  numResultsReturned: number;
  returnResults: any[];

  @Output() emitReturnResults: EventEmitter<any[]> = new EventEmitter();

  previousButtonDisabled: boolean = true;
  nextButtonDisabled: boolean = false;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    //this.fetchResultsByType(this.currentPage);
  }

  previousPageClicked() {
    //this.currentPage --;
    this.checkNextButtonDisabled();
    this.checkPreviousButtonDisabled();
    if (this.currentPage > 1) {
      this.fetchResultsByType(this.currentPage--);
    }
    console.log(this.returnResults);
  }

  nextPageClicked() {
    this.checkNextButtonDisabled();
    this.checkPreviousButtonDisabled();
    this.fetchResultsByType(this.currentPage++);
    console.log(this.returnResults);
  }

  checkPreviousButtonDisabled() {
    if (this.currentPage == 1) {
      this.previousButtonDisabled = true;
    } else {
      this.previousButtonDisabled = false;
    }
  }

  checkNextButtonDisabled() {
    var nextPageResults = this.fetchResultsByType(this.currentPage + 1);
    if (nextPageResults === [] && nextPageResults.length === 0) {
      this.nextButtonDisabled = true;
    } else {
      this.nextButtonDisabled = false;
    }
  }

  fetchResultsByType(currentPage: number): any[] {
    switch (this.requestType) {
      case 'artists': {
        this.dataService
          .getAllArtists(currentPage, this.itemPerPage)
          .subscribe((data: Artist[]) => {
            this.returnResults = data;
          });
        break;
      }
      case 'albums': {
        this.dataService
          .getAllAlbums(currentPage, this.itemPerPage)
          .subscribe((data: Album[]) => {
            this.returnResults = data;
          });
        break;
      }
      case 'songs': {
        this.dataService
          .getAllSongs(currentPage, this.itemPerPage)
          .subscribe((data: Song[]) => {
            this.returnResults = data;
          });
        break;
      }
      default: {
        return [];
      }
    }
    this.emitReturnResults.emit(this.returnResults);
  }
}
