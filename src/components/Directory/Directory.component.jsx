//create-react-app uses webpack internally, which includes json-loader by default
import categories from '../../mock-serviceAPI/categories.json';
import './Directory.styles.scss';
import { CategoryItem } from '../';

export default function Directory() {
  return (
    <div className='categories-container'>
      {categories.map(({ id, imageUrl, title }) => (
        <CategoryItem key={id} imageUrl={imageUrl} title={title} />
      ))}
    </div>
  );
}
