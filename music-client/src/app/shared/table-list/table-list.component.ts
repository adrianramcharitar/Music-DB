import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit {

  @Input() inputArray: any;
  selected: string;

  constructor() { }

  ngOnInit(): void {
  }

  sort(): any[] {
    if (this.selected === '1'){
      return this.inputArray.sort((a, b) => 0 - (a.name > b.name ? -1 : 1));
    }else if (this.selected === '2'){
      return this.inputArray.sort((a, b) => 0 - (a.name > b.name ? 1 : -1));
    }
  }

}
