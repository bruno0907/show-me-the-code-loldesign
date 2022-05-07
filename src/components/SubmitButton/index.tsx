
import { ButtonHTMLAttributes } from "react";

type SubmitButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {  
  children: string;  
}

export const SubmitButton = ({ children, ...rest }: SubmitButtonProps) => {
  return (
    <button
      type="submit"
      {...rest}            
    >
      {children}
    </button>
  )
}
