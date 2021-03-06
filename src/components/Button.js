import React from 'react';

const sizes = {
  default: `py-3 px-8`,
  lg: `py-4 px-12`,
  xl: `py-5 px-16 text-lg`
};

const Button = ({ children, className = '', size, href = null, click = () => { } }) => {

  return href ? (<a href={href} className={`
  ${sizes[size] || sizes.default}
  ${className}
  bg-primary-default
  hover:bg-primary-darker
  rounded
  text-white
  hover:text-white
`}>{children}</a>) : (
    <button
      type="button"
      className={`
        ${sizes[size] || sizes.default}
        ${className}
        bg-primary-default
        hover:bg-primary-darker
        rounded
        text-white
    `}
      onClick={click}
    >
      {children}
    </button>
  );
};

export default Button;
