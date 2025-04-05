'use client';

import { useState } from 'react';

import ProductForm from '@/components/ProductForm';
import ProductItem from '@/components/ProductItem';
import { useProductStore } from '@/shared/store/productStore';

const ProductList = () => {
  const [highlightEnabled, setHighlightEnabled] = useState(false);
  //ToDo: create action creator?
  const products = useProductStore((state) => state.products);
  const HIGHLIGHT_THRESHOLD = 1000;

  return (
    <div className="product-list">
      <button onClick={() => setHighlightEnabled(!highlightEnabled)}>
        {highlightEnabled ? 'Disable' : 'Enable'} Highlight if price&nbsp;{'>'}&nbsp;₽1000&nbsp;₽
      </button>
      <ProductForm />
      <div className="products-grid">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            highlighted={highlightEnabled && product.price > HIGHLIGHT_THRESHOLD}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
