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
      <div className={styles.productItemTop}>
        <Image
          src={product.image || '/placeholder.svg?height=200&width=200'}
          alt={product.name}
          fill
          sizes={'(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
          objectFit="cover"
        />
      </div>

      <div className={styles.productItemBottom}>
        <h3 className={styles.productItemTitle}>{product.name}</h3>
        <span className={styles.productItemPrice}>Цена: {product.price}&nbsp;₽</span>
      </div>
    </div>
  );
};

export default ProductItem;
