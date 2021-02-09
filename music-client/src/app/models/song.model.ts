import { BaseModel } from "../shared/base.model";

export class Song extends BaseModel {

  public name: string;
  public track: number;

  constructor(id: number, created: Date, lastModified: Date, name: string, track: number){
    super(id, created, lastModified);
    this.name = name;
    this.track = track;
  }

}
