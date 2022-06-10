import { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase.utils';
import { toastOptions } from '../../utils/toast.utils';
import { FormInput, Button } from '..';

import { toast } from 'react-toastify';
import './SignUpForm.styles.scss';

const initialState = {
  name: '',
  email: '',
  password: '',
  confirmPw: '',
};

const inputFieldAttributes = [
  {
    label: 'display name',
    name: 'name',
    id: 'signUpName',
    type: 'text',
  },
  {
    label: 'email',
    name: 'email',
    id: 'signUpEmail',
    type: 'email',
  },
  {
    label: 'password',
    name: 'password',
    id: 'signUpPassword',
    type: 'password',
  },
  {
    label: 'confirm password',
    name: 'confirmPw',
    id: 'signUpConfirmPw',
    type: 'password',
  },
];

export default function SignUpForm() {
  const [form, setForm] = useState(initialState);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (form.password === form.confirmPw) {
      try {
        //create user on firebase
        const { user } = await createAuthUserWithEmailAndPassword(
          form.email,
          form.password
        );
        //create user's doc on firestore
        await createUserDocumentFromAuth({
          ...user,
          displayName: form.name,
        });

        toast.success('Signed up successfully.', toastOptions);
      } catch (error) {
        if (error.code === 'auth/email-already-in-use')
          toast.error('Email already in use, please log in.', toastOptions);
        if (error.code === 'auth/weak-password')
          toast.error(
            'Password should be at least 6 characters.',
            toastOptions
          );
      }
    } else {
      toast.error('Incorrect password.', toastOptions);
    }
    e.target.reset();
    setForm(initialState);
  }

  return (
    <div className='sign-up-container'>
      <h2>don't have an account?</h2>
      <span>sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        {inputFieldAttributes.map((att) => (
          <FormInput
            key={att.id}
            label={att.label}
            id={att.id}
            name={att.name}
            value={form[att.name]}
            type={att.type}
            handleChange={handleChange}
          />
        ))}
        <Button cta='Sign Up' />
      </form>
    </div>
  );
}
