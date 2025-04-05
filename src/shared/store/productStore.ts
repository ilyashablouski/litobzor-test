import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { initialProducts } from '@/shared/data/products';
import { Product } from '@/shared/types/product';

interface ProductState {
  products: Product[];
  addProduct: (product: Omit<Product, 'id'>) => void;
}

//Todo: remove devtools in production
export const useProductStore = create<ProductState>(
  // @ts-expect-error use devtools
  devtools(
    (set) => ({
      products: initialProducts,
      addProduct: (product) =>
        set((state) => {
          return {
            products: [...state.products, { id: Date.now(), ...product }],
          };
        }),
    }),
    { name: 'ProductStore' },
  ),
);
