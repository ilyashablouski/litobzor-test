'use client';

import { useState } from 'react';

import ProductForm from '@/components/ProductForm';
import ProductItem from '@/components/ProductItem';
import Button from '@/shared/components/Button';
import { useProductStore } from '@/shared/store/productStore';

const HIGHLIGHT_THRESHOLD = 1000;

const ProductList = () => {
  const [highlightEnabled, setHighlightEnabled] = useState(false);
  const [isOpenForm, setIsOpenForm] = useState(false);

  //ToDo: create action creator?
  const products = useProductStore((state) => state.products);

  const toggleHighlight = () => {
    setHighlightEnabled(!highlightEnabled);
  };

  return (
    <div className="product-list">
      <div className="product-list-actions">
        <Button onClick={toggleHighlight}>
          {highlightEnabled ? 'Выключить' : 'Включить'} подсветку для цeны&nbsp;{'>'}&nbsp;
          {HIGHLIGHT_THRESHOLD}&nbsp;₽
        </Button>
        <Button onClick={() => setIsOpenForm(true)}>Добавить товар</Button>
      </div>

      <ProductForm isOpen={isOpenForm} setIsOpen={setIsOpenForm} />

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
