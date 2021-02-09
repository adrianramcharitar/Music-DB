import { BaseModel } from "../shared/base.model";

export class Artist extends BaseModel {

  public name: string;

  constructor(id: number, date: Date, lastModified: Date, name: string){
    super(id, date, lastModified);
    this.name = name;
  }

}
