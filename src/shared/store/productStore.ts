import { create } from 'zustand';

import { initialProducts } from '@/shared/data/products';
import { Product } from '@/shared/types/product';

interface ProductState {
  products: Product[];
  addProduct: (product: Omit<Product, 'id'>) => void;
}

export const useProductStore = create<ProductState>((set) => ({
  products: initialProducts,
  addProduct: (product) =>
    set((state) => ({
      products: [...state.products, { ...product, id: Date.now() }],
    })),
}));
