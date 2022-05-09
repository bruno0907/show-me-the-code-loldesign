
import { ButtonHTMLAttributes, forwardRef, ForwardRefRenderFunction } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {    
  children: string;  
  type?: "button" | "submit" | "reset";
}

const Component: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = ({ children, type = 'button', ...rest }, ref) => {
  return (
    <button type={type} ref={ref} {...rest}>{children}</button>
  )
}

export const Button = forwardRef(Component)
