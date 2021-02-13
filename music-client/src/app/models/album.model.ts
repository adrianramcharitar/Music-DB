import { BaseModel } from "../shared/base.model";

export class Album extends BaseModel {

  public name: string;
  public year_released: number;
  public artist_id: number;

  constructor(id: number, name: string, artist_id: number, year_released: number){
    super(id);
    this.artist_id = artist_id;
    this.name = name;
    this.year_released = year_released;
  }

}
