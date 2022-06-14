import { Route, Routes } from 'react-router-dom';
import { CategoriesPreview, Category } from '../';


export default function Shop() {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
}
