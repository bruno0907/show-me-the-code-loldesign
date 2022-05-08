
import { ButtonHTMLAttributes } from "react";

type SubmitButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {  
  children: string;  
}

export const SubmitButton = ({ children, ...rest }: SubmitButtonProps) => {
  return (
    <button
      type="submit"
      className="py-2 px-4 rounded-lg bg-blue-600 flex items-center justify-center text-zinc-50 font-semibold"
      {...rest}            
    >
      {children}
    </button>
  )
}
