import { useState } from 'react';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase.utils';
import { FormInput, Button } from '..';
import './SignInForm.styles.scss';
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
    e.target.reset();
    setForm(initialState);
  }

  return (
    <div className='sign-in-container'>
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
        <div className='buttons-container'>
          <Button cta='Sign In' />
          <Button
            type='button'
            buttonType='google-sign-in'
            cta='Google Sign In'
            onClick={signInWithGoogle}
          />
        </div>
      </form>
    </div>
  );
}
