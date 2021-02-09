import { BaseModel } from "../shared/base.model";

export class Artist extends BaseModel {

  public name: string;

  constructor(id: number, created: Date, lastModified: Date, name: string){
    super(id, created, lastModified);
    this.name = name;
  }

}
