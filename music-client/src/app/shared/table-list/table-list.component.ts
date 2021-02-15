import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss'],
})
export class TableListComponent implements OnInit {
  @Input() inputArray: any;
  @Input() type: string;
  selected: string;
  searchQuery: string;

  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  sort(): any[] {
    if (this.selected === '1') {
      return this.inputArray.sort((a, b) => 0 - (a.name > b.name ? -1 : 1));
    } else if (this.selected === '2') {
      return this.inputArray.sort((a, b) => 0 - (a.name > b.name ? 1 : -1));
    }
  }

  // filterByID(id: number): void{

  //   if(this.type === 'artist'){
  //     this.dataService.getAlbumsByArtistId(id)
  //     .subscribe((data: any) => {
  //       this.inputArray = data;
  //     });
  //   }

  // }

  navigateToPage(item: any) {
    if (this.type === 'artists') {
      this.router.navigate(['/artistProfilePage'], { state: { data: item } });
    } else if (this.type === 'albums') {
      this.router.navigate(['/albumProfilePage'], { state: { data: item } });
    } else if (this.type === 'songs') {
      // TODO
    }
  }

  getNewArray(newArray: any[]) {
    this.inputArray = newArray;
  }

  checkTypeIsSong(): boolean {
    console.log(this.type);
    if (this.type === 'songs') {
      return true;
    } else {
      return false;
    }
  }
}
