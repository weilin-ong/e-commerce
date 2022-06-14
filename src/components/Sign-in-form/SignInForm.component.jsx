import { useState } from 'react';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase.utils';
import { FormInput, Button, BUTTON_TYPE_CLASSES } from '..';
import { ButtonsContainer, SignInContainer } from './SignInForm.styles.jsx';

import { toast } from 'react-toastify';
import { toastOptions } from '../../utils/toast.utils';

const initialState = {
  email: '',
  password: '',
};

const inputFieldAttributes = [
  {
    label: 'email',
    name: 'email',
    id: 'signInEmail',
    type: 'email',
  },
  {
    label: 'password',
    name: 'password',
    id: 'signInPassword',
    type: 'password',
  },
];

export default function SignInForm() {
  const [form, setForm] = useState(initialState);

  //Google Sign in
  async function signInWithGoogle() {
    try {
      const { user } = await signInWithGooglePopup();
      await createUserDocumentFromAuth(user);
      toast.success('Signed in successfully', toastOptions);
    } catch (error) {
      console.log(error);
      toast.error('Something is wrong', toastOptions);
    }
  }

  //Form Sign in
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(form.email, form.password);

      toast.success('Signed in successfully', toastOptions);
    } catch (error) {
      if (error.code === 'auth/wrong-password')
        toast.error('Incorrect password', toastOptions);
      if (error.code === 'auth/user-not-found')
        toast.error('User not found', toastOptions);
    }

    //clear form
    e.target.reset();
    setForm(initialState);
  }

  return (
    <SignInContainer>
      <h2>already have an account?</h2>
      <span>sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        {inputFieldAttributes.map((att) => (
          <FormInput
            key={att.id}
            label={att.label}
            name={att.name}
            id={att.id}
            value={form[att.name]}
            type={att.type}
            handleChange={handleChange}
          />
        ))}
        <ButtonsContainer>
          <Button cta='Sign In' />
          <Button
            type='button'
            buttonType={BUTTON_TYPE_CLASSES.google}
            cta='Google Sign In'
            onClick={signInWithGoogle}
          />
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
}
