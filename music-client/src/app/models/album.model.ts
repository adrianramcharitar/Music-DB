import { BaseModel } from "../shared/base.model";

export class Album extends BaseModel {

  public name: string;
  public yearReleased: number;

  constructor(id: number, date: Date, lastModified: Date, name: string, yearReleased: number){
    super(id, date, lastModified);
    this.name = name;
    this.yearReleased = yearReleased;
  }

}
