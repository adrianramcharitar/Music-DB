export class BaseModel {
  public id: number;
  public date: Date;
  public lastModified: Date;

  constructor(id: number, date: Date, lastModified: Date){
    this.id = id;
    this.date = date;
    this.lastModified = lastModified;
  }
}
