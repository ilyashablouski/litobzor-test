import Image from 'next/image';

import { Product } from '@/lib/types/product';

interface ProductItemProps {
  product: Product;
  highlighted: boolean;
}

const ProductItem = ({ product, highlighted }: ProductItemProps) => {
  return (
    <div className={`product-item ${highlighted ? 'highlighted' : ''}`}>
      <Image src={product.image} alt={product.name} width={150} height={150} />

      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductItem;
