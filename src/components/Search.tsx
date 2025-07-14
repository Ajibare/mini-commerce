import { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useProducts } from '@/hooks/useProducts';

interface SearchProps {
  onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const { data: products } = useProducts();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (products) {
      const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(value.toLowerCase()) ||
        product.description.toLowerCase().includes(value.toLowerCase())
      );
      
      onSearch(filteredProducts);
    }
  };

  return (
    <div className="relative">
      <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <Input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearch}
        className="pl-10"
      />
    </div>
  );
}
