import React from 'react';

interface ButtonProps {
  children: JSX.Element;
}

const Button = ({ children }: ButtonProps) => {
  return <button>{children}</button>;
};

export default Button;
