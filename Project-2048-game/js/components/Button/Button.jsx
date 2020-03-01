import React, { forwardRef } from 'react';
import StyledButton from './StyledButton';
const Button = forwardRef(({ onClick, disable = false, ...rest }, ref) => (<StyledButton ref={ref} disable={disable} onClick={disable ? undefined : onClick} {...rest}/>));
export default Button;
