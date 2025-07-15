
// export interface Product {
//   id: number;
//   name: string;
//   description: string;
//   price: number;
//   image: string;
//   slug: string;
//   category?: string;
//   featured?: boolean;
// }


export interface CartItem {
  product: Product;
  quantity: number;
}



export interface Product {
  id: string; // ✅ must be string
  name: string;
  price: number;
  description: string;
  image: string;
  slug: string;
  category?: string;
  featured?: boolean;
}
