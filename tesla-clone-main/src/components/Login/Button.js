import React from 'react';

export const Button = ({ as, children, ...restProps }) => {
    const Component = as || "button"
  return (
    <Component {...restProps}>{children}</Component>
  )
}
