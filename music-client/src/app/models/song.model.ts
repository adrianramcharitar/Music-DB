import { BaseModel } from "../shared/base.model";

export class Song extends BaseModel {

  public name: string;
  public track: number;
  public album_id: number;

  constructor(album_id: number,track: number, id: number, name: string){
    super(id);
    this.album_id = album_id;
    this.name = name;
    this.track = track;
  }

}
