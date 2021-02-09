import { BaseModel } from "../shared/base.model";

export class Song extends BaseModel {

  public name: string;
  public track: number;

  constructor(id: number, date: Date, lastModified: Date, name: string, track: number){
    super(id, date, lastModified);
    this.name = name;
    this.track = track;
  }

}
