export interface Product {
  _id: string;
  title: string;
  sku: string;
  stock: boolean;
  description: string;
  images: [string];
  price: number;
  category: string;
  manufacturer: string;
  platform: string;
  yearReleased: number;
  rating: number;
  amountSold: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
