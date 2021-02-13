import { BaseModel } from "../shared/base.model";

export class Artist extends BaseModel {

  public name: string;

  constructor(id: number, name: string){
    super(id);
    this.name = name;
  }

}
