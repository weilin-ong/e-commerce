import { Button } from '../';

import './ProductCard.styles.scss';

export default function ProductCard({ product }) {
  const { id, name, price, imageUrl } = product;
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`product-${name}-${id}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted' cta='Add to cart' />
    </div>
  );
}
