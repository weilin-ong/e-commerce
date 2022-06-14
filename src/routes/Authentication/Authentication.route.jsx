import { SignUpForm, SignInForm } from '../../components';
import { AuthContainer } from './Authentication.styles';

export default function SignIn() {
  return (
    <AuthContainer>
      <SignInForm />
      <SignUpForm />
    </AuthContainer>
  );
}
