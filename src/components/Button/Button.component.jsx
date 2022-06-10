import React from 'react';
import './Button.styles.scss';

export default function Button({ cta, buttonType }) {
  return <button className={`button-container ${buttonType}`}>{cta}</button>;
}
