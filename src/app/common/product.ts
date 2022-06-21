export class Product {
  sku: string;
  name: string;
  description: string;
  unitPrice: number;
  imageUrl: string;
  active: boolean;
  unitsInStock: string;
  dateCreated: string;
  lastUpdated: string;
  id: string;


  constructor(sku: string, name: string, description: string, unitPrice: number, imageUrl: string, active: boolean, unitsInStock: string, dateCreated: string, lastUpdated: string, id: string) {
    this.sku = sku;
    this.name = name;
    this.description = description;
    this.unitPrice = unitPrice;
    this.imageUrl = imageUrl;
    this.active = active;
    this.unitsInStock = unitsInStock;
    this.dateCreated = dateCreated;
    this.lastUpdated = lastUpdated;
    this.id = id;
  }
}
