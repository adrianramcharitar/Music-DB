import { BaseModel } from "../shared/base.model";

export class Album extends BaseModel {

  public name: string;
  public yearReleased: number;

  constructor(id: number, created: Date, lastModified: Date, name: string, yearReleased: number){
    super(id, created, lastModified);
    this.name = name;
    this.yearReleased = yearReleased;
  }

}
