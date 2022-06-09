import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase.utils';

export default function SignIn() {
  async function logGoogleUser() {
    const { user } = await signInWithGooglePopup();
    const res = await createUserDocumentFromAuth(user);
  }

  return (
    <>
      <button onClick={() => logGoogleUser()}>Sign In with Google</button>
    </>
  );
}
