import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase.utils';

import { SignUp } from '../../components';

export default function SignIn() {
  async function logGoogleUser() {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  }

  return (
    <>
      <h2>sign in page</h2>
      <button onClick={() => logGoogleUser()}>Sign In with Google popup</button>
      <SignUp />
    </>
  );
}
