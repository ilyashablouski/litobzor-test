import Image from 'next/image';
import { FC } from 'react';

import { Product } from '@/shared/types/product';

interface ProductItemProps {
  product: Product;
  highlighted: boolean;
}

const ProductItem: FC<ProductItemProps> = ({ product, highlighted }) => {
  return (
    <div className={`product-item ${highlighted ? 'highlighted' : ''}`}>
      <Image src={product.image} alt={product.name} width={150} height={150} priority={false} />

      <h3>{product.name}</h3>
      <p>Цена: {product.price}&nbsp;₽</p>
    </div>
  );
};

export default ProductItem;
