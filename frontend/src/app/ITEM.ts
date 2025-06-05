export interface ITEM {
  id: number; // Item Id
  userId: number, // Item Id that links to specific user
  image: string; //Item Image url
  shortDesc: string; // Short Item Description
  longDesc: string; // Long Item Description
  price: number; // Item Cost
  seller: string; // Item Seller
  category: string; // Item Category
}
