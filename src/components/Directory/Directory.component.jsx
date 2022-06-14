//create-react-app uses webpack internally, which includes json-loader by default
import categories from '../../mock-serviceAPI/categories.json';
import { DirectoryContainer } from './Directory.styles';
import { DirectoryItem } from '../';

export default function Directory() {
  return (
    <DirectoryContainer>
      {categories.map(({ id, imageUrl, title }) => (
        <DirectoryItem
          key={id}
          imageUrl={imageUrl}
          title={title}
          route={`shop/${title}`}
        />
      ))}
    </DirectoryContainer>
  );
}
