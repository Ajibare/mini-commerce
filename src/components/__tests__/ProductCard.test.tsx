import { render, screen, fireEvent } from '@testing-library/react';
import { ProductCard } from '../ProductCard';
import { Product } from '@/types';

describe('ProductCard', () => {
  const mockProduct: Product = {
    id: '1',
    name: 'Test Product',
    description: 'A test product',
    price: 99.99,
    image: '/test-product.jpg',
    category: 'Electronics',
    slug: 'test-product'
  };

  it('renders product information correctly', () => {
    render(<ProductCard product={mockProduct} />);

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('A test product')).toBeInTheDocument();
    expect(screen.getByText('$99.99')).toBeInTheDocument();
  });

  it('calls addToCart when add to cart button is clicked', () => {
    const addToCart = jest.fn();
    render(<ProductCard product={mockProduct} />);

    fireEvent.click(screen.getByRole('button', { name: /add to cart/i }));
    expect(addToCart).toHaveBeenCalledWith(mockProduct, 1);
  });

  it('handles image loading errors gracefully', () => {
    render(<ProductCard product={mockProduct} />);

    const img = screen.getByRole('img');
    fireEvent.error(img);

    expect(screen.getByAltText('Test Product')).toHaveAttribute('src', '/placeholder-image.jpg');
  });
});
