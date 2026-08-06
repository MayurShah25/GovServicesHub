import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClass = 'btn';
  const variantClass = `btn-${variant}`;
  
  if (props.to) {
    return (
      <Link className={`${baseClass} ${variantClass} ${className}`} {...props}>
        {children}
      </Link>
    );
  }

  if (props.href) {
    return (
      <a className={`${baseClass} ${variantClass} ${className}`} {...props}>
        {children}
      </a>
    );
  }
  
  return (
    <button className={`${baseClass} ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
