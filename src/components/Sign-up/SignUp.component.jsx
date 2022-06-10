import { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase.utils';
import { FormInput, Button } from '../';
import './SignUp.styles.scss';

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
    type: 'text',
  },
  {
    label: 'email',
    name: 'email',
    type: 'email',
  },
  {
    label: 'password',
    name: 'password',
    type: 'password',
  },
  {
    label: 'confirm password',
    name: 'confirmPw',
    type: 'password',
  },
];

export default function SignUp() {
  const [form, setForm] = useState(initialState);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (form.password === form.confirmPw) {
      try {
        const { user } = await createAuthUserWithEmailAndPassword(
          form.email,
          form.password
        );

        await createUserDocumentFromAuth({
          ...user,
          displayName: form.name,
        });
      } catch (error) {
        if (error.code === 'auth/email-already-in-use')
          console.log('Email already in use, please log in.');
        if (error.code === 'auth/weak-password')
          console.log('Password should be at least 6 characters.');
      }
    } else {
      console.log('incorrect password');
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
            label={att.label}
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
