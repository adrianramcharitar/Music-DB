export class BaseModel {
  public id: number;
  public created: Date;
  public lastModified: Date;

  constructor(id: number, created: Date, lastModified: Date){
    this.id = id;
    this.created = created;
    this.lastModified = lastModified;
  }
}
