import React, { ReactNode, CSSProperties } from 'react';
import classNames from 'classnames';

import './button.css';

export interface ButtonProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'primary' | 'secondary';
  className?: any;
  additionalStyles?: CSSProperties;
  onClick: () => void;
}

export const Button = ({
  variant = 'default',
  size = 'md',
  children,
  className,
  additionalStyles,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={classNames('storybook-button', className, {
        'storybook-button--primary': variant === 'primary',
        'storybook-button--secondary': variant === 'secondary',
        'storybook-button--small': size === 'sm',
        'storybook-button--medium': size === 'md',
        'storybook-button--large': size === 'lg',
      })}
      style={{ ...additionalStyles }}
      {...props}
    >
      {children}
    </button>
  );
};
