'use client';

import { useState } from 'react';

import styles from './ProductList.module.scss';
import ProductForm from '@/components/ProductForm';
import ProductItem from '@/components/ProductItem';
import Button from '@/shared/components/Button';
import { useProductStore } from '@/shared/store/productStore';

import PlusIcon from '@/assets/icons/PlusIcon.svg';

const HIGHLIGHT_THRESHOLD = 1000;

const ProductList = () => {
  const [highlightEnabled, setHighlightEnabled] = useState(false);
  const [isOpenForm, setIsOpenForm] = useState(false);

  // Get the current list of products from the Zustand store
  const products = useProductStore((state) => state.products);

  const toggleHighlight = () => {
    setHighlightEnabled(!highlightEnabled);
  };

  return (
    <>
      <div className={styles.productList}>
        <div className={styles.productListActions}>
          <Button onClick={toggleHighlight}>
            {highlightEnabled ? 'Выключить' : 'Включить'}&nbsp;подсветку&nbsp;для&nbsp;цeны&nbsp;{'>'}&nbsp;
            {HIGHLIGHT_THRESHOLD}&nbsp;₽
          </Button>
          <Button icon={<PlusIcon />} onClick={() => setIsOpenForm(true)}>
            Добавить&nbsp;товар
          </Button>
        </div>
        <div className={styles.productListItems}>
          {products.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              highlighted={highlightEnabled && product.price > HIGHLIGHT_THRESHOLD}
            />
          ))}
        </div>
      </div>

      {isOpenForm && <ProductForm setIsOpen={setIsOpenForm} />}
    </>
  );
};

export default ProductList;
