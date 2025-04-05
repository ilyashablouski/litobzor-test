import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { loadProductsFromLocalStorage } from '@/shared/helpers/loadProductsFromLocalStorage';
import { Product } from '@/shared/types/product';

interface ProductState {
  products: Product[];
  addProduct: (product: Omit<Product, 'id'>) => void;
}

//Todo: remove devtools in production

// Create the Zustand store
export const useProductStore = create<ProductState>(
  // @ts-expect-error use devtools
  devtools(
    (set) => ({
      // Initialize products from localStorage or initialProducts
      products: loadProductsFromLocalStorage(),

      // Add a new product and save to localStorage
      addProduct: (product) =>
        set((state) => {
          // Generate a new ID based on the highest existing ID
          const newId = Math.max(...state.products.map((product) => product.id), 0) + 1;
          const newProduct = { id: newId, ...product };
          const updatedProducts = [...state.products, newProduct];

          // Save the updated products list to localStorage
          localStorage.setItem('products', JSON.stringify(updatedProducts));
          return { products: updatedProducts };
        }),
    }),
    { name: 'ProductStore' },
  ),
);
