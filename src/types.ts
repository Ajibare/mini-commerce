


export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  slug: string;
  category?: string;
  featured?: boolean;
}


export interface CartItem {
  product: Product;
  quantity: number;
}