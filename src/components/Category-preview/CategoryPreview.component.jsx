import { ProductCard } from '../';
import {
  Preview,
  Title,
  CategoryPreviewContainer,
} from './CategoryPreview.styles';

export default function CategoryPreview({ title, products }) {

  return (
    <CategoryPreviewContainer>
      <Title to={title}>{title}</Title>
      <Preview>
        {products.map((product, i) => (
          <>
            {i < 4 && <ProductCard key={`${title}---${i}`} product={product} />}
          </>
        ))}
      </Preview>
    </CategoryPreviewContainer>
  );
}
