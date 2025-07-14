export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  slug: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
