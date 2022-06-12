import { useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import { CategoryPreview } from '../../components';

export default function CategoriesPreview() {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => (
     
          <CategoryPreview key={title} products={categoriesMap[title]} title={title} />
       
      ))}
    </>
  );
}
