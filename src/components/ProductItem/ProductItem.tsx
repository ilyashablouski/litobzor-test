import Image from 'next/image';
import { FC } from 'react';

import styles from './ProductItem.module.scss';
import { BLUR_DATA_URL } from '@/shared/constants/urls';
import { Product } from '@/shared/types/product';

interface ProductItemProps {
  product: Product;
  highlighted: boolean;
}

const ProductItem: FC<ProductItemProps> = ({ product, highlighted }) => {
  return (
    // Apply 'highlighted' class conditionally for styling expensive products
    <div className={`${styles.productItem} ${highlighted ? styles.highlighted : ''}`}>
      <div className={styles.productItemTop}>
        {/* Use Next.js Image component for optimized image rendering */}
        <Image
          src={product.image || '/placeholder.svg?height=200&width=200'}
          alt={product.name}
          fill
          sizes={'(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          style={{ objectFit: 'cover' }}
          priority={false}
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
