import { useCartStore } from '@/store/cartStore';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function CartIcon() {
  const { items } = useCartStore();
  const itemCount = Object.values(items).reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Link href="/cart">
      <Button variant="ghost" size="icon" className="relative">
        <ShoppingCart className="w-5 h-5" />
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center">
            <span className="text-xs">{itemCount}</span>
          </span>
        )}
        <span className="sr-only">Cart</span>
      </Button>
    </Link>
  );
}
