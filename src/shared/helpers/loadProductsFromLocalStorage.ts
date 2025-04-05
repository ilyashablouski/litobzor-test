import { initialProducts } from '@/shared/data/products';
import { Product } from '@/shared/types/product';

// Utility function to load products from localStorage
export const loadProductsFromLocalStorage = (): Product[] => {
  // Return initial products on server-side
  if (typeof window === 'undefined') return initialProducts;

  const storedProducts = localStorage.getItem('products');

  if (storedProducts) {
    // Parse stored products and combine with initialProducts, avoiding duplicates by ID
    const parsedProducts: Product[] = JSON.parse(storedProducts);
    return [
      ...initialProducts,
      ...parsedProducts.filter((stored) => !initialProducts.some((initial) => initial.id === stored.id)),
    ];
  }
  return initialProducts; // If nothing in localStorage, return initial products
};
