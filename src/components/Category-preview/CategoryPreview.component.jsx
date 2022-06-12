import { Link } from 'react-router-dom';
import { ProductCard } from '../';
import './CategoryPreview.styles.scss';

export default function CategoryPreview({ title, products }) {
  return (
    <div className='category-preview-container'>
      <h2>
        <Link to={title}>{title}</Link>
      </h2>
      <div className='preview'>
        {products.map((product, i) => (
          <>{i < 4 && <ProductCard key={product.id} product={product} />}</>
        ))}
      </div>
    </div>
  );
}
