import Image from 'next/image';
import { FC } from 'react';

import styles from './ProductItem.module.scss';
import { Product } from '@/shared/types/product';

interface ProductItemProps {
  product: Product;
  highlighted: boolean;
}

const ProductItem: FC<ProductItemProps> = ({ product, highlighted }) => {
  return (
    <div className={`${styles.productItem} ${highlighted ? styles.highlighted : ''}`}>
      <Image src={product.image} alt={product.name} width={150} height={150} priority={false} />

      <div className={styles.productItemBottom}>
        <h3 className={styles.productItemTitle}>{product.name}</h3>
        <span className={styles.productItemPrice}>Цена: {product.price}&nbsp;₽</span>
      </div>
    </div>
  );
};

export default ProductItem;
