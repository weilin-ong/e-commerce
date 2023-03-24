//import { useContext } from 'react';
import { useSelector } from 'react-redux';
import {
  selectCategoriesMap,
  selectIsLoading,
} from '../../store/categories/categories.selector';
//import { CategoriesContext } from '../../contexts/categories.context';
import { CategoryPreview, Spinner } from '../../components';

export default function CategoriesPreview() {
  //const { categoriesMap } = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title, i) => (
          <CategoryPreview
            key={`${title}-${i}`}
            products={categoriesMap[title]}
            title={title}
          />
        ))
      )}
    </>
  );
}
