import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
//import { CategoriesContext } from '../../contexts/categories.context';
import { CategoryTitle, CategoryContainer } from './Category.styles';
import { ProductCard, Spinner } from '../../components';

import { useSelector } from 'react-redux';
import {
  selectCategoriesMap,
  selectIsLoading,
} from '../../store/categories/categories.selector';

export default function Category() {
  //const { categoriesMap } = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);
  const { category } = useParams();
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <>
      <CategoryTitle>{category}</CategoryTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )}
    </>
  );
}
