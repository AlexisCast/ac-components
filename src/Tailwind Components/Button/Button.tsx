import React, { ReactNode } from 'react';
import classNames from 'classnames';

export interface ButtonProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'primary' | 'secondary';
  className?: string;
}

export const Button = ({
  variant = 'default',
  size = 'md',
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        'font-bold border-0 rounded-[3em] border-solid cursor-pointer inline-block leading-none bg-[#e0e0e0]',
        className,
        {
          'text-white !bg-[#1ea7fd]': variant === 'primary',
          'text-[#333] !bg-transparent shadow-inner border border-gray-300':
            variant === 'secondary',
          'text-[12px] py-2.5 px-4': size === 'sm',
          'text-[14px] py-[11px] px-5': size === 'md',
          'text-[16px] py-4 px-6': size === 'lg',
        }
      )}
      {...props}
    >
      {children}
    </button>
  );
};
