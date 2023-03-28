import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { CategoriesPreview, Category } from "../";
import { getCategoriesAndDocuments } from '../../utils/firebase.utils';
import fetchCategoriesAsync, { setCategories } from "../../store/categories/categories.action";

export default function Shop() {
  const dispatch = useDispatch();
  //place it here at the nearest ancestor instead of App component
  //because Categories are only needed here
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments("categories");
      console.log(categoriesArray);
      dispatch(setCategories(categoriesArray));
    };

    getCategoriesMap();

    // dispatch(fetchCategoriesAsync);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
}
