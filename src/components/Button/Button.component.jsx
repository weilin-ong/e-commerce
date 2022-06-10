import React from 'react';
import './Button.styles.scss';

export default function Button({ cta, buttonType, ...otherProps }) {
  return (
    <button className={`button-container ${buttonType}`} {...otherProps}>
      {cta}
    </button>
  );
}
