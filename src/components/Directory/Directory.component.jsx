//create-react-app uses webpack internally, which includes json-loader by default
import categories from '../../mock-serviceAPI/categories.json';
import './Directory.styles.scss';
import { DirectoryItem } from '../';

export default function Directory() {
  return (
    <div className='directory-container'>
      {categories.map(({ id, imageUrl, title }) => (
        <DirectoryItem key={id} imageUrl={imageUrl} title={title} />
      ))}
    </div>
  );
}
