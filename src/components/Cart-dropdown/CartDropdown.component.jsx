import './CartDropdown.styles.scss';
import { Button } from '../';

export default function CartDropdown() {
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>items</div>
      <Button cta='Go to Checkout' />
    </div>
  );
}
