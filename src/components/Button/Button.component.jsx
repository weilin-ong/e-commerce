import React from 'react';
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from './Button.styles';

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted',
};

function getButtonComponent(buttonType = BUTTON_TYPE_CLASSES.base) {
  const custom = {
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  };

  return custom[buttonType];
}

export default function Button({ cta, buttonType, ...otherProps }) {
  const CustomButton = getButtonComponent(buttonType);

  return <CustomButton {...otherProps}>{cta}</CustomButton>;
}
