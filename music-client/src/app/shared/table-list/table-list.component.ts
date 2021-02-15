import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  ngOnInit(): void {}

  sort(): any[] {
    if (this.selected === '1') {
      return this.inputArray.sort((a, b) => 0 - (a.name > b.name ? -1 : 1));
    } else if (this.selected === '2') {
      return this.inputArray.sort((a, b) => 0 - (a.name > b.name ? 1 : -1));
    }
  }

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
    if (this.type === 'songs') {
      return true;
    } else {
      return false;
    }
  }
}
