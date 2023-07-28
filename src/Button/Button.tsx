import React, { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  variant: 'default' | 'primary' | 'secondary';
}

export const Button = ({ children, ...props }: ButtonProps) => {
  console.log('This shows errors');
  return <button {...props}>{children}</button>;
};
