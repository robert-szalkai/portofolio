import React from 'react';

import './Button.css';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: 'btn-primary' | 'btn-ghost';
}

const Button = ({
  children,
  className,
  variant = 'btn-primary',
  type = 'button',
  ...rest
}: ButtonProps) => {
  return (
    <button className={[className, variant, 'btn'].join(' ')} {...rest} type={type}>
      <span className="bg-clipped-button"></span>
      <span className="btn-text">{children}</span>
    </button>
  );
};

export default Button;
