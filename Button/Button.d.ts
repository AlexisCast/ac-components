import React, { ReactNode } from 'react';
interface ButtonProps {
    children: ReactNode;
    variant: 'primary' | 'secondary';
}
export declare const Button: ({ children, ...props }: ButtonProps) => React.JSX.Element;
export {};
