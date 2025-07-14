import Image from 'next/image';
import { Product } from '@/types/index';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/store/cartStore';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCartStore();

  return (
    <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-square relative">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1 text-gray-900">{product.name}</h3>
        <p className="text-gray-600 mb-2 line-clamp-2">{product.description}</p>
        <p className="text-lg font-semibold text-gray-900">${product.price.toFixed(2)}</p>
        <Button
          className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white"
          onClick={() => addItem(product, 1)}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
