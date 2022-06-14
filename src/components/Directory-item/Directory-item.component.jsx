import { useNavigate } from 'react-router-dom';
import {
  DirectoryBodyContainer,
  BackgroundImage,
  DirectoryItemContainer,
} from './Directory-item.styles.jsx';

export default function DirectoryItem({ title, imageUrl, route }) {
  const navigate = useNavigate();

  function onNavigateHandler() {
    navigate(route);
  }

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <DirectoryBodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryBodyContainer>
    </DirectoryItemContainer>
  );
}
