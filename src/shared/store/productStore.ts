import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { initialProducts } from '@/shared/data/products';
import { Product } from '@/shared/types/product';

interface ProductState {
  products: Product[];
  addProduct: (product: Omit<Product, 'id'>) => void;
}

// Create the Zustand store with persist middleware
export const useProductStore = create<ProductState>()(
  persist(
    (set) => ({
      // Initial state combines initialProducts with any persisted data
      products: initialProducts,

      // Action to add a new product and update the persisted state
      addProduct: (product) =>
        set((state) => {
          // Generate a new unique ID based on the highest existing ID
          const newId = Math.max(...state.products.map((p) => p.id), 0) + 1;
          // Create the new product with the generated ID
          const newProduct = { id: newId, ...product };
          // Return the updated products array
          return { products: [...state.products, newProduct] };
        }),
    }),
    {
      // Configuration for persist middleware
      name: 'products-storage', // Key in localStorage where data is stored
      // Custom merge function to combine initialProducts with stored data
      merge: (persistedState, currentState) => {
        const persisted = (persistedState as ProductState)?.products || [];
        // Combine initialProducts with persisted data, avoiding duplicates by ID
        return {
          products: [
            ...currentState.products,
            ...persisted.filter(
              (stored) => !currentState.products.some((initial) => initial.id === stored.id),
            ),
          ],
          addProduct: currentState.addProduct,
        };
      },
    },
  ),
);
