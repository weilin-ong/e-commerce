import { SignUpForm, SignInForm } from '../../components';
import './Authentication.styles.scss'

export default function SignIn() {

  return (
    <div className='auth-container' >
      <SignInForm />
      <SignUpForm />
    </div>
  );
}
